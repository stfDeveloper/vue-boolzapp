let app = new Vue({
    el : "#root",
    data: {
        contacts : [
            {
                contactName: "Annabelle",
                avatar:"img/annabelle.jpeg",
                show : true,
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
                show : true,
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
                show : true,
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
        // restituisco avatar e nome per contatto
        selectedAvatar: function (index){
            let selAvatar = this.contacts[this.selectedContact].avatar
            return selAvatar
        },
        selectedName: function (index){
            let ContactName = this.contacts[this.selectedContact].contactName
            return ContactName
        },
        // selezione della chat nell'index
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
        // posiziona i messaggi in base al received o sent
        messageFrom: function (index){
            if (this.contacts[this.selectedContact].message[index].status  == "sent"){
                return "sent"
            }else{
                return "received"
            }
        },
        // funzione che spawna il messaggio scritto in input + il messaggio di risposta
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
        // mostra la data dell'ultimo messaggio
        msgDatePreview: function (contact, index){
            let previewInfo = contact.message[contact.message.length - 1].date
            return previewInfo

        }, 
        // mostra ultimo messaggio in chats
        lastMsgPreview: function (contact, index){
            let msgInfo = contact.message[contact.message.length - 1].text
            return msgInfo
        },

        // ricerca contatti
        filteredSearch: function (contact,index){
            console.log("sei dentro")
            this.contacts.forEach( contact => {
                if(contact.contactName.toLowerCase().includes(this.search.toLowerCase())){                    
                    contact.show = true;
                }else{
                    contact.show = false;
                }                   
            });
        },

     },//chiusura methods
    //  scroll automatico all'ultimo messaggio
     updated: function () {
        let box = document.querySelector(".chat");
        box.scrollTop = box.scrollHeight;
      },
})//chiusura vue