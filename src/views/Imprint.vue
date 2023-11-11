<template>
  <div class="Imprint">
    <Title type="h1">Imprint</Title>
    <div>
      <Paragraph>
        <h2>Angaben gemäß § 5 ECG</h2>
        <p>
          Max Mustermann<br />
          Musterstraße 1<br />
          12345 Musterstadt
        </p>
        <h2>Kontakt</h2>
        Telefon: 01234-789456<br />
        Telefax: 1234-56789<br />
        E-Mail: max@musterperson.at
      </Paragraph>
    </div>
  </div>
</template>

<script>
import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";

export default {
  name: "Imprint",
  components: {
    Title,
    Paragraph,
  },
};
</script>