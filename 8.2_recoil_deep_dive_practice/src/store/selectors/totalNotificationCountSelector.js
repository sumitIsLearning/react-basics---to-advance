import { selector } from "recoil";
import { NetworkAtom } from "../atoms/NetworkAtom";
import { JobAtom } from "../atoms/JobAtom";
import { MessagingAtom } from "../atoms/MessagingAtom";
import { NotificationAtom } from "../atoms/NotificationAtom";

export const totalNotificationCountSelector = selector( {
    key:"totalNotificationCount",
    get:({get}) => {
        const networkNotificationValue = get(NetworkAtom);
        const jobNotificationValue = get(JobAtom);
        const messageNotificationValue = get(MessagingAtom);
        const notificationValue = get(NotificationAtom);

        const totalNotifications = networkNotificationValue + jobNotificationValue + messageNotificationValue + notificationValue;

        return totalNotifications;
    }
})