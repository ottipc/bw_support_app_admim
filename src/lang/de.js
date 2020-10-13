import germanMessages from 'ra-language-german';

import React from "react";


export const messages = {

    ...germanMessages,
  pos: {
      search: 'Suche',
      language: 'Sprache wechseln',
      role: 'Rollen',
      surname: 'Nachname',
      right: 'Rechte',
      degree: 'Abschluss'
  },

    resources: {
        students: {
            name: 'Student |||| Studenten',
            fields: {
                addressid: 'ID',
                anrede: 'Anrede',
                surname: 'Nachname',
                givenname: 'Vorname',
                gender: 'Geschlecht',
                termconfiguration: 'Termkonfiguration',
            },
        },
        role: {
            name: 'Rolle |||| Rollen',
            fields: {
                id: 'ID',
                name: 'Rolle',

            },
        },
        user_role: {
            name: 'Benutzer Rolle |||| Benutzer Rollen',
            fields: {
                id: 'ID',
                id_user: 'Benutzer ID',
                id_role: 'Rolle ID',
                created_at: 'Hergestellt am',
                updated_at: 'aktualisiert am',
                Roles: "Rollen",
            },
        },
        right: {
            name: 'Recht |||| Rechte',
            fields: {
                id: 'ID',
                name: 'Rechte',
                creatred_at: 'Hergestellt am',
                updated_at: 'aktualisiert am',
            },
        },
        role_right: {
            name: 'Rolle Recht |||| Rolle Rechte',
            fields: {
                id: 'ID',
                id_role: 'Rolle ID',
                id_right: ' Recht ID',
                created_at: 'Hergestellt am',
                updated_at: 'aktualisiert am',
            },
        },
        studies: {
            name: 'Studium |||| Studien',
            fields: {
                addressid: 'Address ID',
                id: 'ID',
                immatdate: ' ImmaDatum',
                exmatdate: ' ExmatDatum',
                exmatreason: 'ExmatGrund',
                degreecode: ' Abschlusscode',
                degree: ' Abschluss',
                university: 'Hochschule',
                isnotifiable: 'meldepflichtig',
                capr_nameeng: 'capr_nameeng',
                capr_degreeshort: 'capr_degreeshort'
            },

        },
        persons: {
            name: 'Person |||| Personen',
            fields: {
                id: 'ID',
                salutation: ' Anrede',
                surname: ' Nachname',
                givenname: 'Vorname',
                gender: 'Geschlecht',
            },

        },
        accounts: {
            name: 'Konto |||| Konten',
            fields: {
                addressid: 'ID',
                Personid: ' Person ID',
                username: ' Benutzername',
                email: 'Email',
                status: 'Stand',
                expire: 'Ablauf'
            },

        },
    },
};

export default messages;
