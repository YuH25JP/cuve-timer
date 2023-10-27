import { ref } from 'vue'
import type Ref from 'vue'
import { defineStore } from 'pinia'

import { TimeResult } from '@/myTypes/timeResult'

export const useTimeHistoryStore = defineStore('timeHistory', () => {
    const hist: Ref.Ref<TimeResult[]> = ref([])

    return { hist }
})