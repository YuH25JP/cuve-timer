import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

import { TimeResult } from '@/myTypes/timeResult'

export const useTimeHistoryStore = defineStore('timeHistory', () => {
    const hist: Ref<TimeResult[]> = ref([])
    const histLength = computed(() => hist.value.length)
    return { hist, histLength }
})
