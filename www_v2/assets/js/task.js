window.First100Days = window.First100Days || {};
window.First100Days.TaskTypes = {
    Task: 'Task',
    Appointment: 'Appointment'
};
window.First100Days.TaskState = {
    NotStarted: 0,
    InProgress: 1,
    NotApplicable: -1,
    Completed: 2
};

window.First100Days.Task = function(spec) {
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
        var options = spec || {};
        my.id = options.id || 'new_task';
        my.name = options.name || 'New Task';
        my.description = options.description || 'New Task';
        my.taskType = options.taskType || window.First100Days.TaskTypes.Task;
        my.state = options.state || window.First100Days.TaskState.NotStarted;
        my.week = options.week || 1;
        return my;
    };
    that.apply = apply;

    apply(spec);
    return that;
};
