// Ship Log — weekend commits, wax-stamped.

const entries = [
  {
    date: ['03', 'AUG'], hash: 'f4c1a2e',
    subject: 'feat(papermind): passage-level citation pinning',
    body: 'Answers now link to the exact highlighted span in the source PDF. Reranker threshold tuned on 40 hand-labeled queries. Coffee count: 3.',
    tags: ['papermind'],
  },
  {
    date: ['27', 'JUL'], hash: 'b91d07c',
    subject: 'perf(devmind): context pruner v2 — 38% fewer tokens',
    body: 'Replaced greedy truncation with relevance-scored eviction. Same eval accuracy, roughly a third off the bill. The crow remains unimpressed.',
    tags: ['devmind', 'perf'],
  },
  {
    date: ['20', 'JUL'], hash: '7e3f9a1',
    subject: 'feat(terminal): sudo hire-me easter egg',
    body: 'This site’s terminal now handles insufficient privileges with appropriate drama.',
    tags: ['portfolio'],
  },
  {
    date: ['13', 'JUL'], hash: 'd20cafe',
    subject: 'fix(moviepulse): cold-start users no longer predicted to hate everything',
    body: 'Fallback prior was anchored to the grumpiest decile. Blend now warms up over first 5 ratings. RMSE holds at 0.84.',
    tags: ['moviepulse'],
  },
  {
    date: ['06', 'JUL'], hash: 'a11ce5d',
    subject: 'chore(leetcode): problems 297–304',
    body: 'Two hards. One of them fell in 20 minutes; the other took the whole of Sunday and a walk around the block. Souls acquired: 8.',
    tags: ['grind'],
  },
  {
    date: ['29', 'JUN'], hash: '0ddba11',
    subject: 'feat(shrine): the lantern now flickers correctly',
    body: 'Spent four hours on a light. Zero regrets. This is what weekends are for.',
    tags: ['portfolio', '3d'],
  },
];

export function initShiplog() {
  const wrap = document.getElementById('shiplog-entries');
  wrap.innerHTML = entries.map(e => `
    <div class="log-entry">
      <div class="log-stamp"><span class="d">${e.date[0]}</span><span class="m">${e.date[1]}</span></div>
      <div class="log-msg">
        <div><span class="hash">${e.hash}</span> <span class="subject">${e.subject}</span></div>
        <div class="body">${e.body}</div>
        <div class="body">${e.tags.map(t => `<span class="tag">#${t}</span>`).join(' ')}</div>
      </div>
    </div>`).join('');
}

export { entries };
