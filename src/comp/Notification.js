
import { NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

/**
 *
 *  Display a Notification
 *  in te React App as Popup Dialog
 * @param type
 * @param title
 * @param message
 */



 export const createNotification = (type, title, message) => {
    console.log("^^^^^^^^^^ CREATING NOTIFICATION TYPE ^^^^^^^^^^^^^^^^^^");
    console.log(type);
        switch (type) {

            case 'info':
                console.log("^^^^^^^^^^ SHOW INFO ^^^^^^^^^^^^^^^^^^");
                NotificationManager.info(message, title, 1000);

                break;
            case "success":
                console.log("^^^^^^^^^^ SHOW SUCCESS ^^^^^^^^^^^^^^^^^^");
                NotificationManager.success(message, title, 1000);
                break;
            case 'warning':
                console.log("^^^^^^^^^^ CSOW WARING ^^^^^^^^^^^^^^^^^^");
                NotificationManager.warning(message, title, 1000);
                break;
            case 'error':
                NotificationManager.error(message, title, 1000);
                break;
        }
};


