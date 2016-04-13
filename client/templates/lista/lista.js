Template.lista.helpers({
  tarefas: function(){
    return Tarefas.find()
  },
  isCheck: function(){
    if (this.status){
      return 'check'
  }
    return ""
  }
})

Template.lista.events({
  'change input[type=checkbox]': function(evento) {
    evento.preventDefault();
    Tarefas.update(this._id, {
      $set:{
        status: evento.currentTarget.checked
    }
  })

  //Session.set('isCheck', evento.currentTarget.checked)
  }
})
