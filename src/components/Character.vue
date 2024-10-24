<template>
  <VTooltip placement="top">
    <!-- Este es el contenido que será envuelto por el tooltip -->
     <div class="character right">
        <img src="../assets/sagas/luna/characters/luna/default.png" />
    </div>
    <template #popper>
      <b>Bold</b>
    </template>
  </VTooltip>
</template>

<script setup></script>

<style>
  .gelatine {
    animation: gelatine 0.5s infinite;
  }

  .character {
    position: absolute;
    bottom: 0;
    display: grid;
  }
  .right {
    right: 120px;
  }
  .left {
    left: 120px;
  }
  .center {
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .spin {
    animation: spin 1s linear;
  }

  .elastic-spin {
    animation: elastic-spin 1s ease;
  }

  .pulse {
    animation: pulse 1s ease-in-out alternate;
  }

  .flash {
    animation: flash 500ms ease alternate;
  }

  .hithere {
    animation: hithere 1s ease;
  }

  .grow {
    animation: grow 2s ease;
  }

  .fade-in {
    animation: fade-in 2s linear;
  }

  .fade-out {
    animation: fade-out 2s linear;
  }

  .bounce {
    animation: bounce 2s ease;
  }

  .bounce2 {
    animation: bounce2 2s ease;
  }

  .shake {
    animation: shake 2s ease;
  }

  .flip {
    backface-visibility: visible !important;
    animation: flip 2s ease;
  }

  .swing {
    transform-origin: top center;
    animation: swing 2s ease;
  }

  .wobble {
    animation: wobble 2s ease;
  }

  .fade-in-down {
    animation: fade-in-down 2s ease;
  }

  .fade-in-left {
    animation: fade-in-left 2s ease;
  }

  .fade-out-down {
    animation: fade-out-down 2s ease;
  }

  .fade-out-right {
    animation: fade-out-right 2s ease;
  }

  .bounce-in {
    animation: bounce-in 2s ease;
  }

  .bounce-in-right {
    animation: bounce-in-right 2s ease;
  }

  .bounce-out {
    animation: bounce-out 2s ease;
  }

  .bounce-out-down {
    animation: bounce-out-down 2s ease;
  }

  .rotate-in-down-left {
    animation: rotate-in-down-left 2s ease;
  }

  .rotate-in-up-left {
    animation: rotate-in-up-left 2s ease;
  }

  .hinge {
    animation: hinge 2s ease 1;
  }

  .roll-in {
    animation: roll-in 2s ease 1;
  }

  .roll-out {
    animation: roll-out 2s ease;
  }
</style>
