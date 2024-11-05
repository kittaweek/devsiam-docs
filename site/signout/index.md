
<script lang="ts" allowJs="true">

import Cookies from "js-cookie";
// @ts-nocheck
import auth from ".vitepress/auth";
export default {
  async mounted() {
    await Cookies.set('is_logout', true)
    document.location.href="/";

  },
};
</script>
