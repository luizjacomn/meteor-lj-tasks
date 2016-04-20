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
    var id = this._id
    Meteor.call("editarCheckbox", {
      id: id,
      checked: evento.currentTarget.checked
    },
  function(error, result) {
    if (error) {
      Materialize.toast('Erro!', 3000, 'red')
    }
    if (result) {
      //Materialize.toast('Tarefa Adicionada!', 3000, 'green')
    }
  });
},
  'click .removerTarefa': function(evento) {
    evento.preventDefault()
    var id = this._id
    MaterializeModal.confirm({
    title: 'Atenção',
    message: "Deseja realmente remover esta tarefa?",
    closeLabel: "CANCELAR",
    submitLabel: "REMOVER",
    callback: function(error, rtn) {
        if (rtn.submit)
            Meteor.call("removerTarefa", id, function(error, result) {
            if (error) {
              Materialize.toast('Erro!', 3000, 'red')
            }
            if (result) {
              Materialize.toast('Tarefa Removida!', 3000, 'green')
            }
        })
      }
    })
  },
  'click .editarTarefa': function(evento) {
    evento.preventDefault()
    Session.set('tarefaValue', this)
    var id = Session.get('tarefaValue')._id
    Session.set('submitForm', true)
    Session.set('tarefaValue', this)
    MaterializeModal.form({
      bodyTemplate: 'editarTarefa',
      title:'<i class="mdi-editor-mode-edit prefix"></i>Editar Tarefa',
      closeLabel: 'CANCELAR',
      submitLabel: 'OK',
      dismissible: false,
      callback: function(error, rtn){
          if (rtn.submit){
          Meteor.call('editarTarefa', {
            id: id,
            nome: $('#editTarefa').val()
          }, function(error, result) {
            if (error) {
              Materialize.toast("Erro!", 2000, 'red')
            }
            if (result) {
                Materialize.toast("Editado!", 2000, 'blue')
            }
          })
      } else {
        if (Session.get('submitForm')) {
            Materialize.toast("Cancelado!", 2000, 'orange')
        }
      }
    }
    })
  }
})
