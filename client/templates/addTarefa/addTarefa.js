Template.addTarefa.events({
  'submit #form_add, click #addBtn': function(evento) {
    evento.preventDefault()
    Meteor.call("addTarefa", {
      nome: $('#tarefa').val(),
      status: false
    },
  function(error, result) {
    if (error) {
      Materialize.toast('Erro!', 3000, 'red')
    }
    if (result) {
      Materialize.toast('Tarefa Adicionada!', 3000, 'green')
    }
  });
    nome: $('#tarefa').val('')
    //evento.target.tarefa.value = ''
  }
})
