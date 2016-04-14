Template.lista.rendered = function() {
  setTimeout(function() {
    $('.tooltipped').tooltip({
      delay: 50
    });

  }, 1000);
}

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
    evento.preventDefault()
    Tarefas.update(this._id, {
      $set:{
        status: evento.currentTarget.checked
    }
  })

  //Session.set('isCheck', evento.currentTarget.checked)
},
  'click .removerTarefa': function(evento) {
    evento.preventDefault()
    Tarefas.remove(this._id)
    Materialize.toast('Tarefa Removida!', 4000)
  }
})
