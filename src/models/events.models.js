import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    cover: {
        type: String,
    },
    location: {
        type: String,
    },
    start_time: {
        type: Date,
    },
    end_time: {
        type: Date,
    },
    require_approve: {
        type: Boolean,
    },
    hosts: [{ avatar: String, name: String, user_id: String }],
    guests: [{ avatar: String, name: String, user_id: String }],
})

export default mongoose.model('events', EventSchema);