import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

import type { puzzleType } from '@/myTypes/timeResult'

export const useTimerSettingsStore = defineStore('timerSettings', () => {
    const currentPuzzleType: Ref<puzzleType> = ref("3");
    return { currentPuzzleType };
});
