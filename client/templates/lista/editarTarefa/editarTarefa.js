Template.editarTarefa.helpers({
  tarefaValue: function() {
    return Session.get('tarefaValue').nome
  }
})

Template.editarTarefa.events({
  'submit #editarTarefa': function (evento) {
    evento.preventDefault()
    var id = Session.get('tarefaValue')._id;
    Meteor.call('editarTarefa', {
      id: id,
      nome: evento.target.editTarefa.value
    }, function(error, result) {
      if (error) {
        Materialize.toast("Erro!", 2000, 'red')
      }
      if (result) {
        Materialize.toast("Editado!", 2000, 'blue')
      }
  })
  Session.set('submitForm', false)
  MaterializeModal.close()
}
})
