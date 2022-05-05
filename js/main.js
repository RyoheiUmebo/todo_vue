(function() {
    'use strict';

    var vm = new Vue({
        el: '#app',
        data: {
            title: "TODO",
            newItem: "",
            placeholder: "Please input todo.",
            MAX_LENGTH: 20,
            today: new Date(),
            todos: []
        },
        watch: {
            todos: {
                handler:function() {
                    localStorage.setItem('todos', JSON.stringify(this.todos));
                    // alert('Data saved');
                },
                deep: true
            }
        },
        mounted: function() {
            this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        },
        methods: {
            addItem: function() {
                if(!this.newItem == 0) {
                    var item = {
                        title: this.newItem,
                        isDone: false
                    };
                    this.todos.push(item);
                    this.newItem = "";
                }
                else {
                    alert('Prease input anything.');
                }
            },
            deleteItem: function(index) {
                if(confirm('Are you sure?')) {
                    this.todos.splice(index, 1);
                }
            },
            allDelete: function() {
                if(confirm('Are you sure?')) {
                    this.todos.splice(0);
                    // console.log(this.todos);
                }
            },
            completedDelete: function() {
                if(confirm('Delete finished?')) {
                    this.todos = this.todos.filter(function(todo) {
                        return !todo.isDone;
                    });
                }
            }
        },
        computed: {
            remaining: function() {
                var items = this.todos.filter(function(todo) {
                    return !todo.isDone;
                });
                return items.length;
            }
        }
    });
})();

$('#btn-explanation').click(function() {
    $('#explanation').fadeIn();
});