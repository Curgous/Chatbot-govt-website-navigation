class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        console.log(this.state)

        /*  function pan() {
              
          }
  
          function aadhar(){}
          function pass(){}*/

        if (this.state.count[0] === 0) {
            let msg = message
            this.actionProvider.nameHandler(msg)
            this.state.count[0] = 1;


        }


        const lw = message.toLowerCase()
        if (lw.includes("pan")) {
            this.actionProvider.handlePan()
            console.log(this.state.message)
        }

        if (lw.includes("adhar")) {
            this.actionProvider.handleAadhar()
            console.log(this.state.message)
        }
        if (lw.includes("pass")) {
            this.actionProvider.handlePassport()
            console.log(this.state.message)
        }
        if (this.state.passport[0] === 1) {
            console.log("Renewal")
            if (lw.includes("ren")) {
                this.actionProvider.passRenewal()
            }
            if (lw.includes("info")) {
                this.actionProvider.passInfo()
            }
        }
        if (this.state.pan[0] === 1) {
            if (lw.includes("app")) {
                this.actionProvider.panApp()
            }
            if (lw.includes("deta")) {
                this.actionProvider.panDetail()
            }
            if (lw.includes("upda")) {
                this.actionProvider.panUpdate()
            }
            if (lw.includes("pri")) {
                this.actionProvider.panPrint()
            }
        }
        if (this.state.aadhar[0] === 1) {
            if (lw.includes("app")) {
                this.actionProvider.aadharApp()
            }
            if (lw.includes("info")) {
                this.actionProvider.aadharInfo()
            }
            if (lw.includes("upda")) {
                this.actionProvider.aadharUpdate()
            }

        }
    }
}

export default MessageParser;