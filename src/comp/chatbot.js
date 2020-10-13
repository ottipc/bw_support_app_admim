import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: 'linear-gradient(to bottom, #56A5E0 5%, #58A8E2 100%)',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#1386FC',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};


const ThemedExample = () => (
    <ThemeProvider theme={theme}>
        <ChatBot

            steps = {[
            {
                id: '1',
                message: 'Hello, I`m your Ssystems-React-Assistant, How can I help You?',
                trigger: '2',
            },
            {
                id: '2',
                options: [
                    {value: 1, label: 'What is Instant ID Manager?', trigger: '4'},
                    {value: 2, label: ' How does it work?', trigger: '5'},
                    {value: 3, label: 'I have another question', trigger: '6'},
                    {value: 4, label: 'Thank`s for the help, BYE', trigger: '3'},
                ],
            },
            {
                id: '3',
                message: 'You are welcome, hope to see you again\n' +
                'BYE BYE',
                end: true,
            },
            {
                id: '4',
                message: 'It is a Web application in the field of identity management.\n' +
                    'The admin will have the option to assign different roles to users, which in turn each include rights that can also be assigned.',
                trigger: '2',
            },
                {
                    id: '5',
                    message: 'It is a very simple process.\n' +
                        'all what you need to do is to choose an user, then choose which roles will you give to him, then click Save',
                    trigger: '2',
                },
                {
                    id: '6',
                    message: 'yes, please, What is your question?\n' +
                    ' I will try to help You, if i could not help you, i will fetch some human to do it.',
                    trigger: '7'
                },
                {
                    id: '7',
                    user: true,
                    trigger: '8',
                },
                {
                    id: '8',
                    message: 'Sorry, i didn`t get that, Would you like to talk to a Human?',
                    trigger: '9',
                },
                {
                    id: '9',
                    options: [
                        {value: 5, label: 'Yes, Please', trigger: '10'},
                        {value: 6, label: ' No, Thank`s', trigger: '11'},

                    ],
                },
                {
                    id: '10',
                    message: 'OKAY, wait please a few minutes',
                    end: true,
                },
                {
                    id: '11',
                    message: 'O.K. , do you have another question?',
                    trigger: '2',
                },

        ]}/>
    </ThemeProvider>
);

export default ThemedExample;
