var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaskSchema = new Schema(
    {
        task_name: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 50
        },
        due_date: {type: Date},
        recurrence: {
            type: String,
            required: true,
            enum: ['None', 'Daily', 'Weekly', 'Bi-Weekly', 'Monthly', 'Quarterly', 'Yearly'],
            default: 'None'
        },
        status: {
            type: String,
            required: true,
            enum: ['Not Started', 'In Progress', 'Completed', 'Cancelled', 'Past Due'],
            default: 'Not Started'
        },
        priority: {
            type: Number,
            required: true,
            default: 0
        },
        assignees: {
            type: [Schema.Types.ObjectId],
            ref: 'User',
            required: true
        },
        sub_tasks: {
            type: [Schema.Types.ObjectId],
            ref: 'Task'
        },
        task_notes: {
            type: String,
            maxlength: 200
        },
        creation_date: {
            type: Date,
            required: true
        }
    }
);