<script setup lang="ts">
type Part =
  | { tag: 'path'; d: string }
  | { tag: 'circle'; cx: string; cy: string; r: string }
  | { tag: 'rect'; x: string; y: string; width: string; height: string; rx?: string }

const props = withDefaults(defineProps<{
  name: string
  size?: 'default' | 'small' | 'service'
}>(), {
  size: 'default'
})

const sizeClass = computed(() => {
  if (props.size === 'service') return 'mkm-icon--service'
  if (props.size === 'small') return 'mkm-icon--small'
  return undefined
})

const icons: Record<string, Part[]> = {
  'hard-hat': [
    { tag: 'path', d: 'M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5' },
    { tag: 'path', d: 'M14 6a6 6 0 0 1 6 6v3' },
    { tag: 'path', d: 'M4 15v-3a6 6 0 0 1 6-6' },
    { tag: 'rect', x: '2', y: '15', width: '20', height: '4', rx: '1' }
  ],
  building: [
    { tag: 'path', d: 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z' },
    { tag: 'path', d: 'M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2' },
    { tag: 'path', d: 'M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2' },
    { tag: 'path', d: 'M10 6h4' },
    { tag: 'path', d: 'M10 10h4' },
    { tag: 'path', d: 'M10 14h4' },
    { tag: 'path', d: 'M10 18h4' }
  ],
  user: [
    { tag: 'path', d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' },
    { tag: 'circle', cx: '12', cy: '7', r: '4' }
  ],
  graduation: [
    { tag: 'path', d: 'M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z' },
    { tag: 'path', d: 'M22 10v6' },
    { tag: 'path', d: 'M6 12.5V16a6 3 0 0 0 12 0v-3.5' }
  ],
  pencil: [
    { tag: 'path', d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z' },
    { tag: 'path', d: 'm15 5 4 4' }
  ],
  store: [
    { tag: 'path', d: 'm2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7' },
    { tag: 'path', d: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' },
    { tag: 'path', d: 'M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4' },
    { tag: 'path', d: 'M2 7h20' }
  ],
  truck: [
    { tag: 'path', d: 'M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2' },
    { tag: 'path', d: 'M15 18H9' },
    { tag: 'path', d: 'M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14' },
    { tag: 'circle', cx: '17', cy: '18', r: '2' },
    { tag: 'circle', cx: '7', cy: '18', r: '2' }
  ],
  monitor: [
    { tag: 'rect', x: '2', y: '3', width: '20', height: '14', rx: '2' },
    { tag: 'path', d: 'M8 21h8' },
    { tag: 'path', d: 'M12 17v4' }
  ],
  users: [
    { tag: 'path', d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' },
    { tag: 'circle', cx: '9', cy: '7', r: '4' },
    { tag: 'path', d: 'M22 21v-2a4 4 0 0 0-3-3.87' },
    { tag: 'path', d: 'M16 3.13a4 4 0 0 1 0 7.75' }
  ],
  group: [
    { tag: 'circle', cx: '5', cy: '9', r: '1.7' },
    { tag: 'path', d: 'M1.4 19.6c.15-2.2 1.6-3.6 3.6-3.6s3.45 1.4 3.6 3.6' },
    { tag: 'circle', cx: '19', cy: '9', r: '1.7' },
    { tag: 'path', d: 'M15.4 19.6c.15-2.2 1.6-3.6 3.6-3.6s3.45 1.4 3.6 3.6' },
    { tag: 'circle', cx: '12', cy: '7.2', r: '2.15' },
    { tag: 'path', d: 'M7.6 20.2c.2-2.7 2-4.4 4.4-4.4s4.2 1.7 4.4 4.4' }
  ],
  mic: [
    { tag: 'rect', x: '9', y: '2', width: '6', height: '13', rx: '3' },
    { tag: 'path', d: 'M19 10v2a7 7 0 0 1-14 0v-2' },
    { tag: 'path', d: 'M12 19v3' }
  ],
  book: [
    { tag: 'path', d: 'M12 7v14' },
    { tag: 'path', d: 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z' }
  ],
  badge: [
    { tag: 'path', d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z' },
    { tag: 'path', d: 'm9 12 2 2 4-4' }
  ],
  shield: [
    { tag: 'path', d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' }
  ],
  flag: [
    { tag: 'path', d: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' },
    { tag: 'path', d: 'M4 22v-7' }
  ],
  phone: [
    { tag: 'path', d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' }
  ],
  mail: [
    { tag: 'rect', x: '2', y: '4', width: '20', height: '16', rx: '2' },
    { tag: 'path', d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' }
  ],
  message: [
    { tag: 'path', d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z' }
  ],
  pin: [
    { tag: 'path', d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' },
    { tag: 'circle', cx: '12', cy: '10', r: '3' }
  ],
  'chevron-left': [
    { tag: 'path', d: 'm15 18-6-6 6-6' }
  ],
  'chevron-right': [
    { tag: 'path', d: 'm9 18 6-6-6-6' }
  ],
  'arrow-right': [
    { tag: 'path', d: 'M5 12h14' },
    { tag: 'path', d: 'm12 5 7 7-7 7' }
  ],
  pause: [
    { tag: 'rect', x: '6', y: '4', width: '4', height: '16', rx: '1' },
    { tag: 'rect', x: '14', y: '4', width: '4', height: '16', rx: '1' }
  ],
  play: [
    { tag: 'path', d: 'M6 4v16l14-8z' }
  ],
  menu: [
    { tag: 'path', d: 'M4 6h16' },
    { tag: 'path', d: 'M4 12h16' },
    { tag: 'path', d: 'M4 18h16' }
  ],
  close: [
    { tag: 'path', d: 'M18 6 6 18' },
    { tag: 'path', d: 'm6 6 12 12' }
  ],
  layers: [
    { tag: 'path', d: 'M12 2 2 7l10 5 10-5-10-5Z' },
    { tag: 'path', d: 'm2 12 10 5 10-5' },
    { tag: 'path', d: 'm2 17 10 5 10-5' }
  ],
  target: [
    { tag: 'circle', cx: '12', cy: '12', r: '10' },
    { tag: 'circle', cx: '12', cy: '12', r: '6' },
    { tag: 'circle', cx: '12', cy: '12', r: '2' }
  ],
  horizon: [
    { tag: 'path', d: 'M2 18h20' },
    { tag: 'path', d: 'M6 18a6 6 0 0 1 12 0' }
  ],
  'file-check': [
    { tag: 'path', d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' },
    { tag: 'path', d: 'M14 2v4a2 2 0 0 0 2 2h4' },
    { tag: 'path', d: 'm9 15 2 2 4-4' }
  ],
  'shield-check': [
    { tag: 'path', d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' },
    { tag: 'path', d: 'm9 12 2 2 4-4' }
  ],
  lightbulb: [
    { tag: 'path', d: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5' },
    { tag: 'path', d: 'M9 18h6' },
    { tag: 'path', d: 'M10 22h4' }
  ],
  headset: [
    { tag: 'path', d: 'M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z' },
    { tag: 'path', d: 'M21 16v2a4 4 0 0 1-4 4h-5' }
  ],
  handshake: [
    { tag: 'path', d: 'm11 17 2 2a1 1 0 1 0 3-3' },
    { tag: 'path', d: 'm14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4' },
    { tag: 'path', d: 'm21 3 1 11h-2' },
    { tag: 'path', d: 'M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3' },
    { tag: 'path', d: 'M3 4h8' }
  ],
  excavator: [
    { tag: 'rect', x: '2.75', y: '16.75', width: '12.5', height: '4.5', rx: '2.25' },
    { tag: 'path', d: 'M5.5 19h7m-8.75-2.25v-7a1.5 1.5 0 0 1 1.5-1.5h3.6a1.5 1.5 0 0 1 1.3.75l2.6 4.5v3.25Zm0 0h9M6 11.25h3m3.75 1.5l3.75-7.5l3.75 5' },
    { tag: 'path', d: 'M17.5 10.25h3.75V12a2.75 2.75 0 0 1-2.75 2.75h-1Z' }
  ],
  loader: [
    { tag: 'path', d: 'M1.8 16.4V8.8h3.4l2.4 3.6' },
    { tag: 'path', d: 'M7.6 12.2h5.2' },
    { tag: 'rect', x: '10.2', y: '6', width: '5', height: '5.4', rx: '0.7' },
    { tag: 'path', d: 'M15.2 8.6H19.6v3.4h-4.4' },
    { tag: 'path', d: 'M8.4 15.2h8' },
    { tag: 'circle', cx: '8.4', cy: '17.9', r: '2.55' },
    { tag: 'circle', cx: '16.4', cy: '17.9', r: '2.55' }
  ],
  roller: [
    { tag: 'circle', cx: '7.5', cy: '17', r: '3.75' },
    { tag: 'path', d: 'M2.85 12.8a6.25 6.25 0 0 1 9.3 0' },
    { tag: 'rect', x: '12', y: '9', width: '9.25', height: '4.75', rx: '1' },
    { tag: 'path', d: 'M13.5 9V4.75H20V9m-7.5-4.25H21' },
    { tag: 'circle', cx: '17', cy: '18.75', r: '2.5' }
  ],
  crane: [
    { tag: 'path', d: 'M6 21h6m-3 0V3L3 9h18M9 3l10 6' },
    { tag: 'path', d: 'M17 9v4a2 2 0 1 1-2 2' }
  ],
  drill: [
    { tag: 'path', d: 'M3.5 20.5h17' },
    { tag: 'path', d: 'M7.5 20.5 12 3.5l4.5 17' },
    { tag: 'path', d: 'M9.1 14.8h5.8' },
    { tag: 'path', d: 'M10.3 9.2h3.4' },
    { tag: 'path', d: 'M12 3.5v13.2' },
    { tag: 'path', d: 'M10.2 16.7h3.6' }
  ],
  weight: [
    { tag: 'circle', cx: '12', cy: '5', r: '3' },
    { tag: 'path', d: 'M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z' }
  ],
  box: [
    { tag: 'path', d: 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' },
    { tag: 'path', d: 'm3.3 7 8.7 5 8.7-5' },
    { tag: 'path', d: 'M12 22V12' }
  ],
  zap: [
    { tag: 'path', d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z' }
  ],
  hook: [
    { tag: 'path', d: 'M9 4v7a4 4 0 0 0 8 0' },
    { tag: 'path', d: 'M13 15v5' },
    { tag: 'path', d: 'M10 20h6' }
  ],
  ruler: [
    { tag: 'path', d: 'M4 6h16' },
    { tag: 'path', d: 'M4 6v12' },
    { tag: 'path', d: 'M4 18h16' },
    { tag: 'path', d: 'M8 6v3' },
    { tag: 'path', d: 'M12 6v3' },
    { tag: 'path', d: 'M16 6v3' }
  ]
}

const parts = computed(() => icons[props.name] ?? [])
</script>

<template>
  <svg
    class="mkm-icon"
    :class="sizeClass"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <template v-for="(part, index) in parts" :key="index">
      <path v-if="part.tag === 'path'" :d="part.d" />
      <circle v-else-if="part.tag === 'circle'" :cx="part.cx" :cy="part.cy" :r="part.r" />
      <rect
        v-else
        :x="part.x"
        :y="part.y"
        :width="part.width"
        :height="part.height"
        :rx="part.rx"
      />
    </template>
  </svg>
</template>
