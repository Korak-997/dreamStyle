<script>
export default {
  name: "DisabledIcon",
  props: {
    text: String,
  },
};
</script>
<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" version="1.1">
    <text
      x="50%"
      y="50%"
      dominant-baseline="middle"
      text-anchor="middle"
      style="
        text-align: center;
        fill: #959595;
        stroke-width: 1.436;
        stroke-linecap: round;
        stroke-linejoin: round;
      "
    >
      {{ text }}
    </text>
    <line
      x1="0"
      y1="20"
      x2="20"
      y2="0"
      stroke="#fd0101"
      stroke-width="1.26738"
      stroke-linecap="round"
    />
    <line
      x1="20"
      y1="20"
      x2="0"
      y2="0"
      stroke="#fd0101"
      stroke-width="1.26738"
      stroke-linecap="round"
    />
  </svg>
</template>
