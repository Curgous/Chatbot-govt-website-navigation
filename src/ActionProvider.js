
class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }

    nameHandler(msg) {

        const message = this.createChatBotMessage("Hello " + msg + " , how may i help you", {
            widget: "tags"
        })
        this.setChatBotMessage(message)

    }
    handlePan = () => {
        this.stateRef.aadhar[0] = 0
        this.stateRef.pan[0] = 1
        const message = this.createChatBotMessage("What help do you need regarding Pan card: 1).APPLICATION OF PAN  2).DETAILS OF PAN 3).UPDATION OF PAN 4).PRINTING ")
        this.setChatBotMessage(message)
    }

    handleAadhar = () => {
        this.stateRef.aadhar[0] = 1
        this.stateRef.pan[0] = 0
        this.stateRef.passport[0] = 0
        const message = this.createChatBotMessage("What help do you need regarding Aadhar: 1)APPOINTMENT 2)INFORMATION 3)UPDATION ")
        this.setChatBotMessage(message)
    }
    handlePassport = () => {
        this.stateRef.passport[0] = 1
        this.stateRef.aadhar[0] = 0
        const message = this.createChatBotMessage("What help do you need regarding Passport: 1)RENEWAL 2)INFORMATION")
        this.setChatBotMessage(message)
    }
    passRenewal = () => {
        const message = this.createChatBotMessage("When applying for  passport Renewal ensure you have all required documents like proof of citizenship, identification, and passport photos that meet specific criteria.", {
            widget: "passR"

        })
        this.setChatBotMessage(message)
    }
    passInfo = () => {
        const message = this.createChatBotMessage("To apply for a passport, you need to fill out the application form (DS-11 for first-time applicants) and provide proof of citizenship, such as a birth certificate. Additionally, you must submit a passport photo that meets specific requirements and pay the applicable fees. Once you have all the necessary documents, submit your application in person at an authorized passport acceptance facility.")
        this.setChatBotMessage(message)

    }
    panApp = () => {
        const message = this.createChatBotMessage("To apply for a PAN card, you need to fill out Form 49A (for Indian citizens) or Form 49AA (for foreign citizens). Along with the form, you must submit proof of identity, address, and date of birth, and provide a recent passport-sized photograph. After completing these steps, pay the application fee and submit the form either online or at a PAN service center.", {
            widget: "panA"

        })
        this.setChatBotMessage(message)

    }

    panDetail = () => {
        const message = this.createChatBotMessage("A Permanent Account Number (PAN) is a unique 10-digit alphanumeric identifier issued by the Indian Income Tax Department. It is essential for various financial transactions, including opening a bank account, filing income tax returns, and making high-value purchases. To apply for a PAN card, you need to fill out Form 49A (for Indian citizens) or Form 49AA (for foreign citizens), submit proof of identity, address, and date of birth, and provide a recent passport-sized photograph. The application can be submitted online or at a PAN service center, and an application fee is required. Once processed, the PAN card is sent to your registered address.")
        this.setChatBotMessage(message)


    }
    panUpdate = () => {
        const message = this.createChatBotMessage("To update your PAN card, you need to fill out the “Request for New PAN Card or/and Changes or Correction in PAN Data” form. Submit the form along with the required documents as proof of the changes. You can submit the application online or at a PAN service center, and an updated PAN card will be sent to your registered address.", {
            widget: "panU"

        })
        this.setChatBotMessage(message)

    }
    panPrint = () => {
        const message = this.createChatBotMessage("Printing your PAN card is essential as it serves as a valid proof of identity and is required for various financial transactions, such as opening a bank account and filing income tax returns.", {
            widget: "panP"

        })
        this.setChatBotMessage(message)

    }

    aadharApp = () => {
        const message = this.createChatBotMessage("To book an appointment for Aadhaar services, visit the UIDAI website and select the “Book an Appointment” option. Choose your preferred Aadhaar Seva Kendra, fill in the required details, and confirm your appointment. This service allows you to schedule visits for new enrolments, updates, and other Aadhaar-related services", {
            widget: "aadA"

        })
        this.setChatBotMessage(message)

    }
    aadharInfo = () => {
        const message = this.createChatBotMessage("Aadhaar is a 12-digit unique identification number issued by the Unique Identification Authority of India (UIDAI) to residents of India. It serves as a proof of identity and address, and is linked to various government services and subsidies. To obtain an Aadhaar, individuals need to provide biometric and demographic data at an Aadhaar enrollment center. The data is then verified, and the Aadhaar card is issued. Aadhaar is used for various purposes, including opening bank accounts, filing taxes, and receiving government benefits. It is important to keep your Aadhaar information updated to ensure seamless access to services.")
        this.setChatBotMessage(message)

    }
    aadharUpdate = () => {
        const message = this.createChatBotMessage("To update your Aadhaar details, visit the UIDAI website and log in with your Aadhaar number and OTP. Select the relevant update option, fill in the required information, and submit the necessary documents.Only address can be updated online. You can also visit an Aadhaar Seva Kendra for assistance.", {
            widget: "aadU"

        })
        this.setChatBotMessage(message)

    }



    setChatBotMessage = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }))
    }



    helloWorldHandler = () => {
        const message = this.createChatBotMessage("Hello")
        this.setChatBotMessage(message)
    }
}
export default ActionProvider;