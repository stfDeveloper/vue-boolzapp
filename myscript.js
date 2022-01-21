let app = new Vue({
    el : "#root",
    data: {
        contacts : [
            {
                contactName: "annabelle",
                avatar:"img/annabelle.jpeg",
                message: [
                    {
                        date:"stanotte alle 3:00am",
                        // messaggio di default
                        text:"mi hai comprato quella spazzola per bambole?",
                        status: "received"
                    },
                    {
                        date:"stanotte alle 3:00am",
                        // da mostrare quando scrivo qualcosa
                        text:"segui l'odore della benzina",
                        status: "sent"
                    },
                    {
                        date:"stanotte alle 3:00am",
                        // messaggio di default
                        text:"arrivo",
                        status: "received"
                    }
                ],
            },
            {
                contactName: "douglas",
                avatar: "img/douglas.webp",
                message: [
                    {
                        date:"oggi alle ",
                        // messaggio di default
                        text:"dove sei, vieni in palestra!",
                        status: "received"
                    },
                    {
                        date:"",
                        // messaggio di default
                        text:"oggi sono troppo stanco",
                        status: "sent"
                    },
                    {
                        date:"",
                        // messaggio di default
                        text:"niente scuse, scendi che andiamo con la mia auto.",
                        status: "received"
                    }
                ],
            },
            {
                contactName: "vladino",
                avatar: "img/vladino.jpeg",
                message: [
                    {
                        date:"oggi alle ",
                        // messaggio di default
                        text:"hai fatto quella cosa che ti ho chiesto?",
                        status: "received"
                    },
                    {
                        date:"",
                        // messaggio di default
                        text:"si vladino, ora non lo sa più nessuno",
                        status: "sent"
                    },
                    {
                        date:"",
                        // messaggio di default
                        text:"bravissimo, nessuno deve sapere!",
                        status: "received"
                    }   
                ],
            }
        ],
        selectedContact:"0",
        sendMessage:""  


    },
    methods:{
        selectedAvatar: function (index){
            let selAvatar = this.contacts[this.selectedContact].avatar
            return selAvatar
        },
        selectedName: function (index){
            let ContactName = this.contacts[this.selectedContact].contactName
            return ContactName
        },
        chat: function (index){    
            this.selectedContact = "";
            this.selectedContact = index
        },
        selectChat: function(element, index){
            if(this.chat == index){
                return true
            }else{
                return false
            }
        },
        messageFrom: function (index){
            if (this.contacts[this.selectedContact].message[index].status  == "sent"){
                return "sent"
            }else{
                return "received"
            }
        },
        newMessage: function (){
            this.contacts[this.selectedContact].message.push({
                date:"15/7",
                text:this.sendMessage,
                status: "sent"
            })
            this.sendMessage="";

                       
        },

    }
})