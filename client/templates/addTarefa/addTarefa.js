Template.addTarefa.events({
  'submit #form_add': function(evento) {
    evento.preventDefault();
    Tarefas.insert({
      nome: evento.target.tarefa.value,
      status: false
    })
    alert('Tarefa adicionada')
    evento.target.tarefa.value = ''
  }
})
