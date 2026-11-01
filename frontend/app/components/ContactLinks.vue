<script setup lang="ts">
import { contacts } from '~/data/site'
</script>

<template>
  <ul class="mkm-contact-list">
    <li>
      <a :href="contacts.phoneHref">
        <MkmIcon name="phone" size="small" />
        <span>{{ contacts.phoneLabel }}</span>
      </a>
    </li>
    <li>
      <a :href="contacts.emailHref">
        <MkmIcon name="mail" size="small" />
        <span>{{ contacts.email }}</span>
      </a>
    </li>
    <li>
      <a :href="contacts.whatsappHref">
        <MkmIcon name="message" size="small" />
        <span>WhatsApp</span>
      </a>
    </li>
    <li>
      <span class="mkm-contact-list__static">
        <MkmIcon name="pin" size="small" />
        <span>{{ contacts.location }}</span>
      </span>
    </li>
  </ul>
</template>
