import {User} from "../../profile/models/profile.model";

const userMock = {
    "username": "Peter",
    "role":  "Admin",
    "level": 4,
    "progress": "63%",
    "completed": [
        {
            "count": 3,
            "total": 15,
            "type": "Courses",
            "label": "Courses completed"
        },
        {
            "count": 6,
            "total": 10,
            "type": "Folders",
            "label": "Folders add"
        },
        {
            "count": 3,
            "total": 19,
            "type": "Books",
            "label": "Books read"
        }
    ]
} as User

export { userMock }
