<template lang="pug">
  tr
    th
      slot(
        name="header"
      )
    td
      slot(
        name="data"
      )
</template>
