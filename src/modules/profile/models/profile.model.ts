enum Role {
    Admin
}

export enum CompleteType {
    Courses,
    Folders,
    Books
}

interface CompleteItem {
    count: number,
    total: number,
    type: keyof typeof CompleteType,
    label: string
}

export interface User{
    username: string,
    role:  keyof typeof Role,
    level: number,
    progress: string,
    completed: CompleteItem[]
}
