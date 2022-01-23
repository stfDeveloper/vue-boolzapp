let app = new Vue({
    el : "#root",
    data: {
        contacts : [
            {
                contactName: "Annabelle",
                avatar:"img/annabelle.jpeg",
                show : false,
                message: [
                    {
                        date:"stanotte alle 3:00",
                        // messaggio di default
                        text:"mi hai comprato quella spazzola per bambole?",
                        status: "received"
                    },
                    {
                        date:"stanotte alle 3:00",
                        // da mostrare quando scrivo qualcosa
                        text:"segui l'odore della benzina",
                        status: "sent"
                    },
                    {
                        date:"stanotte alle 3:00",
                        // messaggio di default
                        text:"arrivo",
                        status: "received"
                    }
                ],
            },
            {
                contactName: "Douglas",
                avatar: "img/douglas.webp",
                show : false,
                message: [
                    {
                        date:"oggi alle 14:00",
                        // messaggio di default
                        text:"dove sei, vieni in palestra!",
                        status: "received"
                    },
                    {
                        date:"oggi alle 14:00",
                        // messaggio di default
                        text:"oggi sono troppo stanco",
                        status: "sent"
                    },
                    {
                        date:"oggi alle 14:00",
                        // messaggio di default
                        text:"niente scuse, scendi che andiamo con la mia auto.",
                        status: "received"
                    }
                ],
            },
            {
                contactName: "Vladino",
                avatar: "img/vladino.jpeg",
                show : false,
                message: [
                    {
                        date:"oggi alle 13:00 ",
                        // messaggio di default
                        text:"hai fatto quella cosa che ti ho chiesto?",
                        status: "received"
                    },
                    {
                        date:"oggi alle 13:00",
                        // messaggio di default
                        text:"si vladino, ora non lo sa più nessuno",
                        status: "sent"
                    },
                    {
                        date:"oggi alle 13:00",
                        // messaggio di default
                        text:"bravissimo, nessuno deve sapere!",
                        status: "received"
                    }   
                ],
            }
        ],
        selectedContact:"0",
        sendMessage:"" ,
        search: "",
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
                date: dayjs().format('MM/DD/YYYY H:mm'),
                text:this.sendMessage,
                status: "sent"
            })
            this.sendMessage="";
            const reply = this.contacts[this.selectedContact];
            setTimeout(function(){
                reply.message.push({
                date: dayjs().format('MM/DD/YYYY H:mm'),
                text:"ok",
                status: "received"
                },
                )
            },1000);    
        },
        msgDatePreview: function (contact, index){
            let previewInfo = contact.message[contact.message.length - 1].date
            return previewInfo

        },
        lastMsgPreview: function (contact, index){
            let msgInfo = contact.message[contact.message.length - 1].text
            return msgInfo
        },


        // filteredSearch: function (){
        //     this.contacts.forEach(contact => {
        //         if(!contact.contactName.toLowerCase().includes(this.search)){                    /da riguardare
        //             contact.show = true;
        //         }else{
        //             contact.show = false;
        //         }                
        //     });
        // },

     }//chiusura methods
})//chiusura vue