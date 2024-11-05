// 'use client';

// import { useState, useEffect } from 'react';
// import { subscribeUser, unsubscribeUser, sendNotification } from '@/app/actions';

// function urlBase64ToUint8Array(base64String: string) {
//   const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
//   const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }

// export function PushNotificationManager() {
//   const [isSupported, setIsSupported] = useState(false);
//   const [subscription, setSubscription] = useState<PushSubscription | null>(null);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     if ('serviceWorker' in navigator && 'PushManager' in window) {
//       setIsSupported(true);
//       registerServiceWorker();
//     }
//   }, []);

//   async function registerServiceWorker() {
//     try {
//       const registration = await navigator.serviceWorker.register('/sw.js', {
//         scope: '/',
//         updateViaCache: 'none',
//       });
//       const sub = await registration.pushManager.getSubscription();
//       setSubscription(sub);
//     } catch (error) {
//       console.error('Service Worker registration failed:', error);
//     }
//   }

//   async function subscribeToPush() {
//     try {
//       const registration = await navigator.serviceWorker.ready;
//       const sub = await registration.pushManager.subscribe({
//         userVisibleOnly: true,
//         applicationServerKey: urlBase64ToUint8Array(
//           process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
//         ),
//       });
//       setSubscription(sub);
//       await subscribeUser(sub); // Custom action to save the subscription on your server
//     } catch (error) {
//       console.error('Subscription failed:', error);
//     }
//   }

//   async function unsubscribeFromPush() {
//     try {
//       await subscription?.unsubscribe();
//       setSubscription(null);
//       await unsubscribeUser(); // Custom action to remove the subscription from your server
//     } catch (error) {
//       console.error('Unsubscription failed:', error);
//     }
//   }

//   async function sendTestNotification() {
//     if (subscription) {
//       try {
//         await sendNotification(message); // Custom action to trigger notification from the server
//         setMessage('');
//       } catch (error) {
//         console.error('Sending notification failed:', error);
//       }
//     }
//   }

//   if (!isSupported) {
//     return <p>Push notifications are not supported in this browser.</p>;
//   }

//   return (
//     <div>
//       <h3>Push Notifications</h3>
//       {subscription ? (
//         <>
//           <p>You are subscribed to push notifications.</p>
//           <button onClick={unsubscribeFromPush}>Unsubscribe</button>
//           <input
//             type="text"
//             placeholder="Enter notification message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <button onClick={sendTestNotification}>Send Test</button>
//         </>
//       ) : (
//         <>
//           <p>You are not subscribed to push notifications.</p>
//           <button onClick={subscribeToPush}>Subscribe</button>
//         </>
//       )}
//     </div>
//   );
// }
