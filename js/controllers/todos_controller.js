Todos.TodosController = Ember.ArrayController.extend({
    createTodo: function () {
        // Get the todo title set by the "New Todo text field
        var title = this.get('newTitle')
        if (!title.trim()) { return }

        // Create the new Todo model
        var todo = Todos.Todo.createRecord({
            title: title,
            isCompleted: false
        })

        // Clear 
