Template.addTarefa.events({
  'submit #form_add, click #addBtn': function(evento) {
    evento.preventDefault()
    Tarefas.insert({
      nome: $('#tarefa').val(),//evento.target.tarefa.value,
      status: false
    })
    nome: $('#tarefa').val('')
    Materialize.toast('Tarefa Adicionada!', 4000)
    //evento.target.tarefa.value = ''
  }
})
