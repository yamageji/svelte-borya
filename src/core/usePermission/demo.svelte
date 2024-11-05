<script lang="ts">
  import { usePermission } from './index.svelte';

  const accelerometer = usePermission('accelerometer');
  const accessibilityEvents = usePermission('accessibility-events');
  const ambientLightSensor = usePermission('ambient-light-sensor');
  const backgroundSync = usePermission('background-sync');
  const camera = usePermission('camera');
  const clipboardRead = usePermission('clipboard-read');
  const clipboardWrite = usePermission('clipboard-write');
  const gyroscope = usePermission('gyroscope');
  const magnetometer = usePermission('magnetometer');
  const microphone = usePermission('microphone');
  const notifications = usePermission('notifications');
  const paymentHandler = usePermission('payment-handler');
  const persistentStorage = usePermission('persistent-storage');
  const push = usePermission('push');
  const speaker = usePermission('speaker');
  const localFonts = usePermission('local-fonts');
</script>

<div class="rounded-md border-2 border-stone-300 p-4">
  <h2 class="text-lg font-bold">usePermission</h2>

  <div class="ml-2 mt-2">
    <p>accelerometer: {accelerometer.state}</p>
    <p>accessibilityEvents: {accessibilityEvents.state}</p>
    <p>ambientLightSensor: {ambientLightSensor.state}</p>
    <p>backgroundSync: {backgroundSync.state}</p>
    <p>camera: {camera.state}</p>
    <p>clipboardRead: {clipboardRead.state}</p>
    <p>clipboardWrite: {clipboardWrite.state}</p>
    <p>gyroscope: {gyroscope.state}</p>
    <p>magnetometer: {magnetometer.state}</p>
    <p>microphone: {microphone.state}</p>
    <p>notifications: {notifications.state}</p>
    <p>paymentHandler: {paymentHandler.state}</p>
    <p>persistentStorage: {persistentStorage.state}</p>
    <p>push: {push.state}</p>
    <p>speaker: {speaker.state}</p>
    <p>localFonts: {localFonts.state}</p>
  </div>
</div>
