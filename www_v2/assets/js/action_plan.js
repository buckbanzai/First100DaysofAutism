window.First100Days.ActionPlan = function(spec) {
    var my = {}, that = {};

    var get = function(key) {
        return my[key];
    };
    that.get = get;

    var state = function() {
        return First100Days.Utils.extend({}, my);
    };
    that.state = state;

    var apply = function(spec) {
        var options = spec || {}, instance = {};
        my.tasks = [];
        for(i in options.tasks) {
            var t = options.tasks[i];
            my.tasks.push(First100Days.Task(t));
        }
        return my;
    };
    that.apply = apply;

    var add = function(task) {
        my.tasks.push(task);
        return that;
    }
    that.add = add;

    var read = function() {
        var store = new First100Days.Store("actionPlan");
        apply(store.get());
        return that;
    };
    that.read = read;

    var taskWith = function(id) {
        for(i in my.tasks) {
            var t = my.tasks[i];
            if (t.get('id') === id) {
                return t;
            }
        }
        return null;
    };
    that.taskWith = taskWith;

    var tasksForWeek = function(week_num) {
        var matching = [];
        for(i in my.tasks) {
            var t = my.tasks[i];
            if (t.get('week') === week_num) {
                matching.push(t);
            }
        }
        return matching;
    };
    that.tasksForWeek = tasksForWeek;

    var mergeTask = function(taskSpec) {
        if (taskSpec) {
            var t = taskWith(taskSpec.id);
            if (t) {
                t.apply(taskSpec);
            } else {
                add(First100Days.Task(taskSpec));
            }
        }
        return that;
    };
    that.mergeTask = mergeTask;

    var write = function() {
        var store = new First100Days.Store("actionPlan");
        var stream = {tasks:[]};
        for(i in my.tasks) {
            var t = my.tasks[i].state();
            stream.tasks.push(t);
        }
        apply(store.set(stream));
        return that;
    };
    that.write = write;

    apply(spec);
    return that;
};
