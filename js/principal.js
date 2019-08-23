var app = new Vue
({
    el: '#app',
    data:  {
        list : [

        ],
        name: '',
        note: ''
    },

    methods:
    {
        addnote: function()
        {
            stateA=false;
            if(this.note>=12.5)
            {
                stateA=true;
            }
            if(this.name!="" && this.note!="")
            {
                this.list.push({name:this.name, note:this.note,state:stateA});
                this.name="";
                this.note="";

            }
            else
            {
                alert("Ingrese el nombre y promedio del estudiante")
            }
        }
    }


})