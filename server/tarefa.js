Meteor.methods({
  addTarefa:function(tarefa) {
    try {
      Tarefas.insert(tarefa)
      return true
    } catch (e) {
      return false
    }
  },
  removerTarefa:function(id) {
    try {
      Tarefas.remove(id)
      return true
    } catch (e) {
      return false
    }
  },
  editarTarefa:function(campos) {
    try {
      Tarefas.update(campos.id, {
        $set:{
          nome: campos.nome
      }
    })
        return true
      } catch (e) {
        return false
      }
  },
  editarCheckbox:function(campos) {
    try {
      Tarefas.update(campos.id, {
        $set:{
          status: campos.checked
      }
    })
        return true
      } catch (e) {
        return false
      }
  }
});
