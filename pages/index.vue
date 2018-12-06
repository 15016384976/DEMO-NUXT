<template>
  <div>
    <div class="store">
      <div>
        {
        </div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;"id" : "{{$store.state.user.id}}",</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;"account" : "{{$store.state.user.account}}",</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;"name" : "{{$store.state.user.name}}",</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;"access_token" : "{{$store.state.user.access_token}}"</div>
        <div>
        }
      </div>
    </div>
    <br />
    <div>
      <button @click="handleGet">GET</button>
      <button @click="handlePost">POST</button>
      <button @click="handlePut">PUT</button>
      <button @click="handleDelete">DELETE</button>
    </div>
    <br />
    <div>
      <el-button type="primary" @click.native.prevent="handleSignout" :loading="loading" class="submit">登出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const result = await app.$axios.$get('bins/15yoda', { 
      params: { 
        "id": "5e5ee0a6-ba47-4892-b590-e085fad03f8f"
      } 
    })
    return { result }
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    handleGet() {
      this.$axios.get('bins/15yoda', { 
        params: { 
          "id": "5e5ee0a6-ba47-4892-b590-e085fad03f8f"
        } 
      })
    },
    handlePost() {
      this.$axios.post('bins/15yoda', { 
        "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBiNjVlMjFmYmNjYjdlNjI3ZDY0NWFkMzA0MGNhZTYxIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1NDEzOTk4OTgsImV4cCI6MTU0MTQwMzQ5OCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAxIiwiYXVkIjpbImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9yZXNvdXJjZXMiLCJhcGkiLCJnYXRld2F5Il0sImNsaWVudF9pZCI6ImNsaWVudCIsInN1YiI6IjVlNWVlMGE2LWJhNDctNDg5Mi1iNTkwLWUwODVmYWQwM2Y4ZiIsImF1dGhfdGltZSI6MTU0MTM5OTg5NywiaWRwIjoibG9jYWwiLCJwaG9uZSI6IjEzMDAwMDAwMDAxIiwibmFtZSI6IuW8oOS4iSIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJhcGkiLCJnYXRld2F5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInNtc19jb2RlIl19.XWSdmF9bX08k658qrm9WaU035jT1ydlVGmVpg4m7QDDVdGrt_p47TWL3uUsogk_cSFVJ_WeyJdAfLT9-DNAD1wvEEULBlaNdzpXR7sHqCoa-ZeN_hnnLGm8lSlf1WEyvDEui5IOa8lgvP2w-RDIpUl0LfzqI7CAFzzyvloRnpZEDjWD5-Oaqiu-82YVbVcI0BfMvYCDypfTe0ilDsLsRpbl1301zq1a6pf1JJNDg3ctIBVaSLITYTccrpAlqyFsiJDVl3o9gTgjZJ_h9bFfrYoadiyO8CLcG_OiU-I7xlW2-JEFf7BOMxIzpbWzg8KSVS5ifAGgayIztRBsCDoFtzA"
      })
    },
    handlePut() {
      this.$axios.put('bins/15yoda', { 
        "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBiNjVlMjFmYmNjYjdlNjI3ZDY0NWFkMzA0MGNhZTYxIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1NDEzOTk4OTgsImV4cCI6MTU0MTQwMzQ5OCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAxIiwiYXVkIjpbImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMS9yZXNvdXJjZXMiLCJhcGkiLCJnYXRld2F5Il0sImNsaWVudF9pZCI6ImNsaWVudCIsInN1YiI6IjVlNWVlMGE2LWJhNDctNDg5Mi1iNTkwLWUwODVmYWQwM2Y4ZiIsImF1dGhfdGltZSI6MTU0MTM5OTg5NywiaWRwIjoibG9jYWwiLCJwaG9uZSI6IjEzMDAwMDAwMDAxIiwibmFtZSI6IuW8oOS4iSIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJhcGkiLCJnYXRld2F5Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInNtc19jb2RlIl19.XWSdmF9bX08k658qrm9WaU035jT1ydlVGmVpg4m7QDDVdGrt_p47TWL3uUsogk_cSFVJ_WeyJdAfLT9-DNAD1wvEEULBlaNdzpXR7sHqCoa-ZeN_hnnLGm8lSlf1WEyvDEui5IOa8lgvP2w-RDIpUl0LfzqI7CAFzzyvloRnpZEDjWD5-Oaqiu-82YVbVcI0BfMvYCDypfTe0ilDsLsRpbl1301zq1a6pf1JJNDg3ctIBVaSLITYTccrpAlqyFsiJDVl3o9gTgjZJ_h9bFfrYoadiyO8CLcG_OiU-I7xlW2-JEFf7BOMxIzpbWzg8KSVS5ifAGgayIztRBsCDoFtzA"
      })
    },
    handleDelete() {
      this.$axios.delete('bins/15yoda', { 
        params: { 
          "id": "5e5ee0a6-ba47-4892-b590-e085fad03f8f"
        } 
      })
    },
    handleSignout() {
      this.loading = true
      this.$store.dispatch('nuxtServerSignout').then(()=>{
        this.loading = false
      })
      this.$router.replace({ path: '/authorize' })
    }
  }
}
</script>

<style scoped>
.store {
  font-size: 14px;
  white-space: nowrap;
}
.submit {
  width: 100%;
}
</style>