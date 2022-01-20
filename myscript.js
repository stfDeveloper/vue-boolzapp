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
                        contactText:"mi hai comprato quella spazzola per bambole?",
                        status:"sent"
                    },
                    {
                        date:"stanotte alle 3:00am",
                        // da mostrare quando scrivo qualcosa
                        userText:"segui l'odore della benzina",
                        status:"received"
                    },
                    {
                        date:"stanotte alle 3:00am",
                        // messaggio di default
                        contactText:"arrivo",
                        status:"sent"
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
                        contactText:"dove sei, vieni in palestra!",
                        status:"sent"
                    },
                    {
                        date:"",
                        // messaggio di default
                        userText:"oggi sono troppo stanco",
                        status:"received"
                    },
                    {
                        date:"",
                        // messaggio di default
                        contactText:"niente scuse, scendi che andiamo con la mia auto.",
                        status:"received"
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
                        contactText:"hai fatto quella cosa che ti ho chiesto?",
                        status:"sent"
                    },
                    {
                        date:"",
                        // messaggio di default
                        userText:"si vladino, ora non lo sa più nessuno",
                        status:"received"
                    },
                    {
                        date:"",
                        // messaggio di default
                        contactText:"bravissimo, nessuno deve sapere!",
                        status:"received"
                    }
                ],
            }
        ],
        selectedContact:"0",  

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

    }
})