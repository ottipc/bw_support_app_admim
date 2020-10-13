import englishMessages from 'ra-language-english';

export  default  {
    pos: {
        search: 'Search',
        language: 'Switch Language',
        role: 'Roles',
        surname: 'Surname',
        right: 'Rights',
        degree: 'Degree'
    },
    ...englishMessages,
    resources: {
        students: {
            name: 'Student |||| Students',
            fields: {
                addressid: 'ID',
                anrede: 'Salutation',
                surname: 'Surname',
                givenname: 'Givenname',
                gender: 'Gender',
                termconfiguration: 'Termconfiguration',
            },
        },
        role: {

            name: 'Role |||| Roles',
            fields: {
                id: 'ID',
                name: 'Role',
                created_at: 'Created at',
                updated_at: 'Updated at',
                priority: 'Priority',
                category: 'Category',
            },
        },
        user_role: {
            name: 'User` Role |||| User`s Roles',
            fields: {
                id: 'ID',
                id_user: 'User ID',
                id_role: 'Role ID',
                created_at: 'Created at',
                updated_at: 'Updated at',
            },
        },
        right: {
            name: 'Right |||| Rights',
            fields: {
                id: 'ID',
                name: 'Right',
                creatred_at: 'Created at',
                updated_at: 'Updated at',
            },
        },
        role_right: {
            name: 'Role`s Right |||| Role`s Rights',
            fields: {
                id: 'ID',
                id_role: 'Role ID',
                id_right: ' Right ID',
                created_at: 'Created at',
                updated_at: 'Updated at',
            },
        },
        studies: {
            name: 'Study |||| Studies',
            fields: {
                addressid: 'Address ID',
                id: 'ID',
                immatdate: ' ImmaDate',
                exmatdate: ' ExmatDate',
                exmatreason: 'Exmatreason',
                degreecode: ' Degreecode',
                degree: ' Degree',
                university: 'University',
                isnotifiable: 'isnotifiable',
                capr_nameeng: 'capr_nameeng',
                capr_degreeshort: 'capr_degreeshort'
            },

        },
        persons: {
            name: 'Person |||| Persons',
            fields: {
                id: 'ID',
                anrede: 'Salutation',
                surname: 'Surname',
                givenname: 'Givenname',
                gender: 'Gender',
            },

        },
        accounts: {
            name: 'Account |||| Accounts',
            fields: {
                addressid: 'ID',
                Personid: ' Person ID',
                username: ' Username',
                email: 'Email',
                status: 'Status',
                expire: 'Expire'
            },

        },
    },
};


