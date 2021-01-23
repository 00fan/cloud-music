export default function (lyric) {
    
    const lyricList = lyric.split('\n')
    const lyricObj = {};
    lyricList.forEach(item => {
        if (item) {
            const result = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/.exec(item)
            const time1 = result[1] * 60 * 1000;
            const time2 = result[2] * 1000;
            const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
            const time = time1 + time2 + time3;
            const content = item.replace(/\[.*\]/, '')
            lyricObj[time] = content
        }

    });
    return lyricObj;
}