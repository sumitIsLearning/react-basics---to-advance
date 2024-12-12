import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { JobAtom } from './store/atoms/JobAtom';
import { MessagingAtom } from './store/atoms/MessagingAtom';
import { NetworkAtom } from './store/atoms/NetworkAtom';
import { NotificationAtom } from './store/atoms/NotificationAtom';
import { totalNotificationCountSelector } from './store/selectors/totalNotificationCountSelector';

const App = () => {
  const [networkNotificationValue , setNetworkNotificationValue] = useRecoilState(NetworkAtom);
  const [jobNotificationValue , setJobNotificationValue] = useRecoilState(JobAtom)
  const [messageNotificationValue , setMessageNotificationValue] = useRecoilState(MessagingAtom)
  const [notificationValue , setNotificationValue] = useRecoilState(NotificationAtom)

  //selector
  const totalNotificationCount = useRecoilValue(totalNotificationCountSelector);

  //by using useEffect i am just trying to simulate the way we can increase the count of notification when we receive updates from backend
  useEffect(() => {
    const intervalId = setInterval(() => {
      setJobNotificationValue(currValue => currValue + 1);
    }, 10 * 1000)
    return () => {
      clearInterval(intervalId);
    }
  }, [])

  return (
    <div>
      <button>Home</button>

      <button onClick={
        () => setNetworkNotificationValue(currValue => currValue + 1)
      }>My Network ({networkNotificationValue >= 100 ? "99+" : networkNotificationValue})</button>

      <button onClick={
        () => setJobNotificationValue(currValue => currValue + 1)
      }>Jobs ({jobNotificationValue >= 100 ? "99+" : jobNotificationValue})</button>

      <button onClick={
        () => setMessageNotificationValue(currValue => currValue + 1)
      }>Messaging ({messageNotificationValue >= 100 ? "99+" : messageNotificationValue})</button>

      <button onClick={
        () => setNotificationValue(currValue => currValue + 1)
      }>Notifications ({notificationValue >= 100 ? "99+" : notificationValue})</button>

      <button>Me({totalNotificationCount})</button>

      {/* Note: This is not the way we update the notification count , in real world its just for practice purpose , in real we get updates from backend and we increase the count but as we don't have a backend now we are doing it this way. */}
    </div>
  )
}

export default App