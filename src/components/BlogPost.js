import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { addComment, getComments } from '../services/commentService';

import './BlogPost.css';

// Sample blog content - you can easily replace this with real content
const blogContent = {
  1: {
    id: 1,
    title: 'The Return of Trump-Era Tariffs: Why It Matters for Your Career',
    author: 'Mohamed Jama',
    date: 'September 9, 2025',
    readTime: '8 min read',
    tags: ['Finance', 'Business'],
    image: '/blog-images/tarriffs.jpg',
    content: `
      <p>Tariffs are back in the headlines, and not in a small way. With the return of Trump-era proposals, global trade policy is once again becoming a major talking point. But what exactly do these tariffs mean, why are they making a comeback, and how could they affect industries and careers?</p>
      
      <p>For students and early professionals aiming for fields like law, business, policy, or finance, understanding these developments is about more than passing interest. Being able to connect global news to professional realities is a skill that will make you stand out, whether in interviews or in the workplace.</p>
      
      <p>We'll keep things straightforward, relevant, and practical, so that you walk away with an informed perspective on why this matters.</p>
      
      <h2>What Are Tariffs, and Why Do They Matter?</h2>
      
      <p>At their core, tariffs are taxes placed on goods imported from abroad. By making foreign products more expensive, they encourage consumers and businesses to turn to local alternatives instead. They also serve as a revenue stream for governments: if a UK company imports phones, the import tax goes directly into government coffers.</p>
      
      <p>On the surface, this seems like a simple mechanism. Tariffs protect domestic industries, level the playing field, and give local businesses the opportunity to grow. But here's where it becomes more complex: no economy is entirely self-sufficient. Every country depends on imports, whether for raw materials, technology, or food.</p>
      
      <p>When tariffs rise too high or are applied too broadly, they risk disrupting global trade flows, driving up consumer prices, and straining international relations. What starts as a protective measure at home can quickly spiral into global economic friction.</p>
      
      <h2>Trump's Approach: A Closer Look</h2>
      
      <p>During his first presidency, Donald Trump used tariffs extensively under his "America First" strategy. Now, he is campaigning on even bolder proposals:</p>
      
      <ul>
        <li>A 10% universal tariff on all imports into the United States.</li>
        <li>A 60% tariff specifically targeting Chinese goods.</li>
      </ul>
      
      <p>These are significant moves in a global economy that has long been built on the principles of free trade. Supporters argue that such policies protect American jobs and strengthen domestic industries. Critics, however, point out the risks: higher prices for consumers, retaliatory tariffs from trade partners, and the potential for prolonged trade wars.</p>
      
      <p>Consider China as an example. If tariffs make Chinese products too expensive for American buyers, Chinese exporters lose access to one of their biggest markets. That translates into lower sales, reduced profits, and slower economic growth. Often, countries in this position are pressured into trade agreements tilted in the U.S.'s favour. The "Phase One" trade deal is a prime example: China committed to buying more American goods in exchange for reduced tariffs.</p>
      
      <p>But not all countries comply. When negotiations stall, retaliation follows. If China imposes its own tariffs on U.S. exports, both economies suffer — and the ripple effects spread across global markets, raising prices and destabilising supply chains worldwide.</p>
      
      <h2>Why Students and Future Professionals Should Care</h2>
      
      <p>At this point, you might be asking: what does this have to do with me? The answer is simple; tariffs don't just shape economies, they shape careers.</p>
      
      <div class="highlight-box">
        <h3>For future lawyers:</h3>
        <p>Tariffs create new dimensions of commercial law. Contract disputes may arise over who bears the cost of added import taxes. Supply chain disruptions lead to litigation when delivery deadlines or quantities are missed. Cross-border disputes become more common as companies navigate competing regulations. Even mergers and acquisitions require careful analysis of tariff exposure, since rising costs can impact profitability.</p>
        
        <h3>For business and finance students:</h3>
        <p>Tariffs directly influence company strategies. Increased import costs squeeze profit margins, forcing businesses to choose between raising consumer prices or absorbing losses. This pushes firms to revisit supply chain structures, renegotiate contracts, and sometimes relocate production to avoid unfavourable trade barriers. For careers in consulting, investment banking, or corporate strategy, the ability to assess and advise on these changes is invaluable.</p>
        
        <h3>For those in policy and economics:</h3>
        <p>Tariffs are case studies in how domestic politics intersects with international trade. They show how decisions framed as "protecting jobs" can have far-reaching consequences for inflation, foreign relations, and global growth. Understanding these connections helps future policymakers, analysts, and researchers contribute meaningfully to debates on trade and economic strategy.</p>
      </div>
      
      <h2>The Bigger Picture: Commercial Awareness</h2>
      
      <p>Ultimately, being commercially aware is not about memorising every tariff proposal or becoming a trade expert. It's about recognising patterns: how global events, government policies, and business decisions interact, and how they impact the industries you aim to work in.</p>
      
      <p>When tariffs disrupt supply chains, legal teams adapt contracts, consultants rework strategies, and finance professionals adjust valuations. These ripple effects shape the environment you'll step into as a professional. If you can demonstrate an ability to connect global headlines to real-world consequences, you set yourself apart from peers who view the news as distant or irrelevant.</p>
      
      <h2>Final Thoughts</h2>
      
      <p>Trade policy may seem abstract, but its effects are concrete: higher prices at the checkout, shifting global supply chains, and new professional challenges in law, business, finance, and beyond. Trump's proposed tariffs are just one example of how political agendas shape economic realities - and by extension, professional ones.</p>
      
      <p>Commercial awareness is about more than following the news. It's about asking: what does this mean for the industries I care about, and the career path I'm pursuing? That mindset is what gives you a competitive edge in interviews, in the workplace, and in the long run.</p>
      
      <p><em>JazakAllahu Khair for reading, and stay tuned for more insights that connect global events to your growth and success.</em></p>
    `
  },
  2: {
    id: 2,
    title: 'Six-Figure Salaries, Infinite Accountability: What NQ Pay Rises Teach Us About Wealth and Sadaqah',
    author: 'Mohamed Jama',
    date: 'September 9, 2025',
    readTime: '8 min read',
    tags: ['Law', 'Charity'],
    image: '/blog-images/blog2.jpg',
    content: `
      <h1>The Pay War: What\'s Going On?</h1>
      <p>If you've been following industry updates, you may have come across the term "pay war." This refers to the growing competition between top law firms to offer the highest starting salaries to junior lawyers. These roles, known as Newly Qualified (NQ) positions, are the first full-time jobs for law graduates who have just completed their two-year training contracts.</p>
      
      <p>At the moment, those salaries are climbing rapidly. Some U.S. firms operating in London are <a href="https://www.legalcheek.com/the-firms-most-list/?metakey=_cmb_newly_qualified_salary" target="_blank" rel="noopener noreferrer">offering NQs over £150,000</a> to start. In response, even more traditional <a href="https://www.legalcheek.com/2025/05/slaughter-and-may-keeps-nq-pay-at-150k/" target="_blank" rel="noopener noreferrer">UK-based firms have increased their figures</a>. These include the Magic Circle, a group of five elite law firms known for their global presence and high-end work, such as Clifford Chance and Linklaters.</p>
      
      <p>For a student just one or two years out of university, these numbers are hard to ignore. But it's not only the size of the salary that's significant. It also signals a broader shift across the legal sector, including rising global competition, changing workplace expectations, and increasingly high demands on young lawyers. These roles open doors, but they also come with long hours, significant pressure, and environments that test your wellbeing and your values.</p>
      
      <h2>Why Are Salaries Rising So Fast?</h2>
      
      <p>The sharp increase in NQ pay hasn't happened in isolation. It is the result of several key pressures on law firms. With so many firms competing for top graduates, salary has become one of the most effective ways to attract and retain talent. Many U.S. firms are setting the standard with high pay, and UK firms are under pressure to match or compete with those figures. Rising inflation and housing costs have made it necessary for firms to offer more competitive salaries. Additionally, newly qualified lawyers today are expected to work longer hours and take on more responsibility, and firms are using high salaries to justify these intense demands.</p>
      
      <p>It's not just the Magic Circle reacting to these shifts. Other respected firms like <a href="https://www.legalcheek.com/2025/06/eversheds-and-pinsents-boost-nq-lawyer-pay-as-more-city-firms-join-summer-salary-surge/" target="_blank" rel="noopener noreferrer">Eversheds Sutherland, Pinsent Masons</a>, and <a href="https://www.legalcheek.com/2025/06/bird-bird-bumps-nq-solicitor-pay-to-102k/" target="_blank" rel="noopener noreferrer">Bird & Bird</a> have also increased their NQ salaries. This reflects how widespread and intense the competition has become across the legal sector.</p>
      
      <h2>What Does This Mean for You?</h2>
      
      <p>These changes highlight a few things. There is growing demand for commercial lawyers, increasing globalisation of the legal profession, and ongoing discussions about work-life balance and mental health in high-performance environments. These six-figure salaries are real and, for some, within reach. But they come with trade-offs. If you're pursuing a career in this space, it's important to enter the profession with your eyes open, your expectations grounded, and your values firmly in place. The numbers are tempting, but your integrity, wellbeing, and long-term purpose matter far more.</p>
      
      <h2>The Bigger Picture: Wealth, Responsibility, and the Call to Give</h2>
      
      <p>These rising salaries represent real opportunities for young professionals, especially Muslim students entering the legal world. But alongside these opportunities comes a deeper responsibility.</p>
      
      <p>In Islam, wealth is not something to avoid. When pursued with sincerity and used with intention, it becomes a powerful tool for good. The Prophet ﷺ was once asked who the best of people are. He replied, <em>"A believer who strives in the way of Allah with his wealth and his life"</em> (<a href="https://sunnah.com/riyadussalihin:1289" target="_blank" rel="noopener noreferrer">Bukhari and Muslim</a>). This hadith shows that wealth is not only permissible but praiseworthy when used to support the right causes.</p>
      
      <p>One of the simplest ways to use wealth well is through charity. As the Prophet ﷺ said, <em>"Wealth does not decrease by giving in charity"</em> (<a href="https://sunnah.com/muslim:2588" target="_blank" rel="noopener noreferrer">Muslim</a>). Generosity does not reduce our provision; it increases barakah, even if the impact is not immediately visible. We are encouraged to give both <strong>zakat</strong>, the obligatory charity that purifies our wealth, and <strong>sadaqah</strong>, voluntary charity from the heart. These acts support those in need, whether locally or globally.</p>
      
      <p>As you read about record-breaking salaries, reflect on the devastating situation in Gaza. <a href="https://www.ochaopt.org/content/reported-impact-snapshot-gaza-strip-3-september-2025" target="_blank" rel="noopener noreferrer">Over 63,000 lives have been lost</a>, and thousands more face starvation, displacement, and trauma. While we pursue stability and success, others are striving to survive. This contrast should not create guilt, but purpose. A high salary is not just a personal win; it is an opportunity to do meaningful good. Even a small portion of your income can help rebuild homes, feed families, and bring comfort to those enduring hardship. If financial support is not possible, sincere du'a is equally valuable. Understandably, some people hesitate to donate through large charities due to concerns about whether the funds actually reach those in need. Two recent initiatives worth exploring are <a href="https://www.instagram.com/thesameerproject/?hl=en" target="_blank" rel="noopener noreferrer">The Sameer Project</a> and <a href="https://elhamfund.ca/" target="_blank" rel="noopener noreferrer">The Elham Fund</a>, both of which focus on delivering aid directly to the people of Gaza. Every contribution counts, no matter the size. What matters most is the sincerity behind it.</p>
      
      <h2>Strive for Wealth, But Don't Be Owned by It</h2>
      
      <p>Islam teaches us not to avoid wealth, but to pursue it with accountability. This world, with all its luxury and promise, is fleeting. Wealth is not inherently evil, but attachment to it can be dangerous. As our income grows, so does the temptation to chase status or define our worth by material success.</p>
      
      <div class="highlight-box">
        <p>The Prophet ﷺ warned, "Two hungry wolves sent among sheep are not more destructive than a man's greed for wealth and fame is to his religion" (<a href="https://sunnah.com/riyadussalihin:484" target="_blank" rel="noopener noreferrer">Tirmidhi</a>). This reminds us that unchecked desire can consume both our intentions and our faith.</p>
      </div>
      
      <p>If your intention is to support your family, serve the Ummah, and give for the sake of Allah, your career can become a form of worship. Keep your hearts grounded. Strive for excellence, earn well, and always ask: what is this wealth really for? Use it to uplift others and purify it through charity. True success lies not in how much we earn, but in how we give.</p>
      
      <p>Never lose sight of what truly matters. The Prophet ﷺ said, <em>"Two rak'ahs before Fajr are better than the world and everything in it"</em> (<a href="https://sunnah.com/riyadussalihin:1102" target="_blank" rel="noopener noreferrer">Muslim</a>). No salary, title, or job is more valuable than your connection to Allah. The dunya, in His sight, is <a href="https://www.abuaminaelias.com/dailyhadithonline/2020/03/23/dunya-less-than-worthless/" target="_blank" rel="noopener noreferrer">worth less than a dead carcass</a>. Keep your focus on the akhirah and do not let the world blind you.</p>
      
      <h2>Final Reflection</h2>
      
      <p>Work hard. Dream big. Pursue excellence. But always return to this question: Why do I want this wealth? Is it so I can live without purpose, or is it so I can build a life rooted in service, generosity, and goodness?</p>
      
      <p>These NQ salary rises are a clear sign of how financially rewarding a legal career can be, and that's something to be excited about. Ambitious Muslims should feel encouraged to aim high, chase these opportunities, and strive for success in whatever field they enter. But as you do so, never lose sight of the foundation: sincerity (<strong>ikhlas</strong>). Your efforts, ambitions, and achievements should always be tied to something greater than the number on your contract.</p>
      
      <p>Ultimately, wealth is a tool. If used with purpose, it can uplift yourself, your family, and your Ummah. If pursued without sincerity, it becomes a distraction. Your rizq is written. Seek it with ihsan, and spend it with sincerity. Ground your career in the remembrance of Allah, and it becomes an act of worship.</p>
      
      <p>May Allah put barakah in your efforts, your earnings, and your ambitions, and may He make you a means of relief for others.</p>
      
      <p><em>JazakAllahu Khair for reading. Stay tuned for more reflections, insights, and reminders, always grounded in purpose.</em></p>
    `
  }
  ,
  3: {
    id: 3,
    title: 'Tangible assets vs debt obligations: The subtle yet vital role of sukuk in Shariah-compliant transactions',
    author: 'Sohayb Nassier',
    date: 'September 23, 2025',
    readTime: '7 min read',
    tags: ['Finance', 'Law', 'Business'],
    image: '/blog-images/blog3.jpeg',
    content: `
      <h2>What are <em>sukuk</em>?</h2>

      <p><em>Sukuk</em> are a form of Islamic financial certificate that are issued to investors who gain a proportional ownership in a particular asset. Conventional bonds are debt instruments grounded in the accumulation of interest (a form of <em>Riba</em>), which is prohibited in Islamic law.</p>

      <p>The issuer of a <em>sakk</em> may agree to repurchase the certificate at the maturity date at its ultimate value, bringing potential profits if the asset has augmented in value. Two main types of assets for which <em>sukuk</em> are issued are:</p>

      <ul>
        <li>Energy and sustainability projects</li>
        <li>Real estate development and letting</li>
      </ul>

      <p>The common asset-based investment structure allows for pragmatic financing, where cold credit ratings and interest are replaced with greater certainty; the investor’s returns are determined directly by the performance of — and profits generated from — the asset rather than the fluctuation of interest rates. Hence, a <em>sakk</em> may afford greater financial control and benefit to the investor and less burdensome obligations to the issuer.</p>

      <p>Likewise, <em>sukuk</em> do not give rise to rights <em>in personam</em>, whereas loans, bonds and other securitised assets may do so. This is because the financial certificate concerns a particular investment activity, such as a project. The investor is not entitled to repayment by a debt-obliged issuer; rather, they own a portion of the asset in which they have invested, and their “repayment” takes the form of accumulated profits either from the active returns (e.g. a proportion of the rent collected by the issuer in a real estate development project) or when the asset is repurchased by the issuer at the maturity of the certificate.</p>

      <h3>Typical process:</h3>
      <ul>
        <li>To isolate the financial risks, a Special Purpose Vehicle (SPV) is created by the developer/originator to hold the specific assets in question (property, usufructs, project materials, factories).</li>
        <li>The SPV issues the financial certificate to the investors and invests their capital into the project.</li>
        <li>It then collects returns from the asset (profits, rent, increase in value) and distributes them to the investors.</li>
      </ul>

      <p>There are several particular forms of <em>sukuk</em>. Some of the most common forms are:</p>

      <ul>
        <li><strong><em>Sukuk al-ijara</em></strong> – a lease structure whereby the SPV buys the assets from the originator at a purchase price and owns the assets in trust for the <em>sukuk</em> holders, and each holder has an ownership interest determined by the proportion of their investment. Thus, each <em>sukuk</em> holder will receive a proportional return on their investment. The SPV ultimately leases the assets back to the originator, and the rent payments are divided amongst the investors.</li>
        <li><strong><em>Sukuk al-musharaka</em></strong> – partnership certificates that constitute proportional ownership. Profits from the <em>musharaka</em> are shared between the SPV and the originator according to pre-agreed percentages. The losses, however, are proportional to the partners’ initial investments.</li>
        <li><strong><em>Sukuk al-mudaraba</em></strong> – the principal seeking investment (<em>mudareb</em>) enters into a partnership with an SPV pertaining to projects or other partner-based arrangements. Unlike <em>sukuk al-musharaka</em>, the losses and financial risk are taken only by the SPV and investors, unless the <em>mudareb</em> is at fault.</li>
        <li><strong><em>Sukuk al-murabaha</em></strong> – the SPV sells the assets to a third party for the original purchase price in addition to a pre-agreed profit amount. The third party pays the purchase price in instalments and sells the assets. Thus, the obligation to pay the purchase price to the SPV is deferred.</li>
        <li><strong><em>Sukuk al-Istisna’a</em></strong> (for a project in construction) – within the originator–SPV agreement, the originator agrees to construct an asset and deliver it to the SPV at some future date. In exchange, the SPV agrees to fund the construction costs in instalments. These instalments may align with specific milestones set out in the agreement. The SPV uses proceeds from the <em>sukuk</em>-certified investors, and once the asset is constructed, the SPV agrees to lease the asset back to the originator.</li>
        <li><strong><em>Sukuk al-wakala</em></strong> – when the SPV enters into a <em>wakala</em> agreement with the <em>wakeel</em> (agent) and then invests the investors’ capital (for which the certificates were issued) into a pool of Sharia-compliant assets chosen by the <em>wakeel</em>. The SPV holds these assets and ultimately makes return payments to the <em>sukuk</em>.</li>
      </ul>

      <div class="highlight-box">
        <h3>Here's an example to put this into practice:</h3>
        <ul>
          <li>The SPV issues <em>sukuk al-ijara</em>, raising £150 million for the construction of a hotel.</li>
          <li>Investors receive the financial certificate and provide funds to the SPV.</li>
          <li>The SPV uses the £150 million to purchase land and construct the hotel.</li>
          <li>The SPV then leases the hotel back to the real estate developer (the originator) under an <em>ijara</em> agreement.</li>
          <li>The developer distributes rent to the SPV.</li>
          <li>The SPV then distributes this rental income as profit to <em>sukuk</em> holders.</li>
          <li>After 10 years, the developer repurchases the mall from the SPV at an agreed price.</li>
          <li>The SPV uses this amount to return the principal to <em>sukuk</em> holders.</li>
        </ul>
      </div>

      <p>Thus the return on investment is based on actual profit (e.g. rental income, growth in value of a project, etc.) rather than a static interest, which — aside from its fairness — often engenders greater commercial value for the investor/certificate holder. Certain types of <em>sukuk</em> may also be secondarily traded in line with the Shariah, as they are not based on debt obligations or interest and focus on tangible assets.</p>

      <h2>Integration into different jurisdictions:</h2>

      <p>Some civil law jurisdictions do not hold the same concept of a trust as English common law, creating a need for some jurisdictions to draft new specific legislation allowing for the legal recognition of <em>sukuk</em> trust certificates. For example, Turkey has passed legislation (Law No. 6362/2012) to allow the formation of Asset-Leasing Companies (ALCs) regulated by the Capital Markets Board solely to act as SPVs and issue the certificates in the <em>sukuk al-ijara</em> structure. This would ensure the <em>sakk</em> does not act like an ordinary bond and that the property has been effectively separated from the originator’s other assets.</p>

      <h2>Examples of <em>sukuk</em> deals</h2>
      <ul>
        <li>White &amp; Case advised Saudi Aramco on its $10 billion revolving credit facilities. The facilities were partly divided into two SAR <em>murabaha</em> tranches (in an aggregate value of US$3 billion). The Sharia-compliant murabaha structures were recognised as part of the "Saudi Arabia Deal of the Year" by Islamic Finance News (2015).</li>
        <li>Clifford Chance (UAE) advised the banks on amending and restating the original 1.2 billion AED <em>murabaha</em> financing to IMG Theme Park LLC to 1.8 billion AED for the construction of a theme park and to add an <em>ijara</em> tranche to the financial structure to both utilise the cost-plus-profit nature of <em>murabaha</em> and allow for Shariah-compliant leasing (and <em>Ijara wa Iqtina</em>, i.e. lease-to-ownership).</li>
        <li><a href="https://www.whitecase.com/news/press-release/white-case-advises-update-republic-indonesia-us25-billion-trust-certificate" target="_blank" rel="noopener noreferrer">White &amp; Case advises on the Republic of Indonesia’s $3 billion <em>sukuk</em> and green <em>sukuk</em> offering</a>: it comprises issuing a tranche of $1.25 billion in <em>sukuk</em> and a tranche of $750 million in green <em>sukuk</em> to finance sustainable projects.</li>
      </ul>

      <h2>Conclusion</h2>
      <p><em>Sukuk</em> structures continue to attract interest from investors due to their commercial advantages in tangible asset profits. According to LSEG’s <a href="https://www.lseg.com/en/insights/data-analytics/navigating-uncertainty-global-islamic-finance-assets-expected-to-exceed-67-trillion-by-2027" target="_blank" rel="noopener noreferrer">report</a> (2022), the global Islamic finance market is projected to grow to $6.67 trillion by 2027. Of this projection, the global <em>sukuk</em> instruments’ total value is notably expected to contribute up to $1.346 trillion.</p>
    `
  },
  4: {
    id: 4,
    title: 'The Big Re-Launch: MCA x MML Iftar and What We’ve Been Up To',
    author: 'Daanya Isa',
    date: 'March 15, 2025',
    readTime: '6 min read',
    tags: ['Law', 'Business', 'Faith'],
    image: '/blog-images/blog4.jpg',
    content: `
      <p>Paperwork, planning, and deadlines - a combination all too common for anyone breaking into the corporate sector, and we at MCA are no exception. From planning events to stressing over applications, here’s what we’ve been up to and what you should keep an eye out for.</p>

      <h2>MCA x MML Iftar</h2>

      <p>It would be ridiculous to not start this blog with our biggest success thus far: the Muslim Corporate Academy x Manchester Muslim Lawyers collaborative iftar event! But what even was it, and what was its purpose?</p>

      <p>As far as iftars go, ours may have been on the slightly unconventional side, but it was an incredible night nonetheless. Unlike your typical iftar where the focus is - without a doubt - the food, our iftar focused on providing young Muslims with an opportunity to network with likeminded individuals, gain insight into the corporate sector, and see firsthand how faith needs never to be compromised to achieve success in the corporate world. Through the grace of Allah, not only were we able to achieve these aims, but we were able to go above and beyond - we completely sold out and were able to deliver the most incredible iftar with the help of our lovely caterers: Zamarud Restaurant! But how did we do this, and what did the night look like?</p>

      <p>We began with a beautiful recitation of Surah Al Imran, verses 156-161, to remind us of the significance of tawakkul (complete trust and dependence on Allah) in our daily lives - a theme which was echoed throughout the night. Following this, we interviewed our first esteemed guest, Yusra Abo, to share her journey towards becoming a trainee solicitor in the highly competitive world of commercial law, and the role her faith played in securing a training contract with DLA Piper - a leading global commercial law firm. Yusra shared valuable, practical advice from an application perspective for students trying to break into the corporate sector, explaining how our biggest competitive advantage is our faith. She emphasised the importance of staying true to ourselves and to Allah, noting that without tawakkul and commitment to our faith, the difficulties of the application process are only amplified. From a practical standpoint, her advice to ensure that written applications do not adopt a ‘one size fits all’ approach was one that stuck with us all, and a key takeaway from the night.</p>

      <p>Our second and third guest speakers were Mohammed Aziz and Ishtiaque Akbar: audit senior at EY, and student intern at both Amazon and JP Morgan respectively. Aziz provided valuable insight into securing a position at one of the Big Four following an apprenticeship, whilst Ishtiaque shed light on the reality of balancing applications and internships alongside university. The highlight of Aziz’s interview was his emphasis on the importance of stepping out of your comfort zone and maintaining a healthy work-life balance. He explained how, often, overcoming the fear of stepping out of your comfort zone is the key to demonstrating proactivity - especially in the case of explaining your faith to others without fear of judgement as, more often than not, people will be more understanding than we think. Aziz also further emphasised the insurmountable value of tawakkul and never compromising our faith to mindlessly chase after ‘success’ because, after all, staying true to your deen and achieving success are not mutually exclusive - rather, the latter is dependent on the former - a sentiment later echoed by Ishtiaque.</p>

      <p>Ishtiaque, as a current student, shared how he embodied his faith during his time as an intern at two major companies: Amazon and JP Morgan. In perhaps a surprising turn of events, Ishtiaque revealed that, following his internship at JP Morgan, he opted for a lesser known firm for his future endeavours. He explained that, for many of us, it’s easy to fall into the trap of chasing after big firms solely for the name, when in reality we should be seeking firms whose cultures and values align with our own. Ishtiaque also recounted how, in times where he felt as though practising his faith may have been seen as inconvenient by others, he overcame this by simply outperforming his competitors to set himself apart. He added that, whether it be taking time out for salah, or refusing to partake in work pub culture, if we put Allah first and foremost, success follows through naturally.</p>

      <h2>Behind The Scenes</h2>

      <p>Whilst we were working on events to help you with your corporate journeys, we found ourselves unspared by the brutality of application season too. As the saying goes: there are no spectators, we are all in the splash zone - we at MCA are not exempt. Alongside planning and hosting such an outstanding event, our hiatus can be explained by the relentless nature of applications in the corporate sector.</p>

      <p>Within our team - from computer science, to law, to the civil service - we have all been hard at work sending out a multitude of applications, with each of us facing both rejection and success. Whether it was writing cover letters, undergoing assessment centres, or going through multiple rounds of interviews, the MCA team knows first hand what it’s like to try to break into the corporate sector with minimal guidance. This is why we are striving to create a space in which young, ambitious Muslims are able to hone their passion and maximise the utility of their drive.</p>

      <p>Alongside applications and events, we - like many of you - were also subject to the gruelling stretch of endless midterms and finals. Essays, group projects, exams, and even administrating anesthetics; you name it, we’ve done it. Our battles with both exam and application season meant we found ourselves spread too thinly. But, rest assured, because moving forth, we plan on carrying this momentum on, so make sure you keep your eyes out for our fortnightly blogs and any upcoming events announcements!</p>

      <h2>What Should You Expect? - Key Takeaways, and Moving Forth</h2>

      <p>The MCA x MML Iftar proved that spiritual enrichment and professional empowerment do not need to be distinct and separate. In a room full of ambition and faith, the message was clear: success in the corporate sector does not require compromising yourself, your religion, nor your values. From application advice, to profound reminders about tawakkul, the night equipped attendees with a greater understanding of how to break into the corporate sector and, most importantly, reaffirmed that our faith is not a barrier but our greatest asset.</p>

      <p>As we at MCA continue to navigate the challenges brought about by paperwork, planning, and deadlines, we remain committed to ensuring that no young Muslim feels as though they do not belong in the corporate world. Through fortnightly blogs and additional events, we hope to empower every young Muslim to pursue their aspirations. Our iftar was only one of many more events to come, so be sure to keep an eye out for more, InshaAllah!</p>
    `
  }
};



const BlogPost = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const post = blogContent[id];

  useEffect(() => {
    // Load comments from Firebase
    const loadComments = async () => {
      try {
        const fetchedComments = await getComments(id);
        setComments(fetchedComments);
      } catch (error) {
        // Fallback to empty array if there's an error
        setComments([]);
      }
    };
    
    loadComments();
    

  }, [id, post]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    
    if (!commentAuthor.trim() || !newComment.trim()) {
      alert('Please fill in both name and comment fields.');
      return;
    }

    if (newComment.length < 10) {
      alert('Please write a more thoughtful comment (at least 10 characters).');
      return;
    }

    setIsSubmitting(true);

    try {
      // Add comment to Firebase
      const newCommentObj = await addComment(id, commentAuthor.trim(), newComment.trim());
      
      // Add to local state
      const updatedComments = [newCommentObj, ...comments];
      setComments(updatedComments);
      
      // Clear form
      setNewComment('');
      setCommentAuthor('');
      
      // Show success message
      alert('Comment posted successfully!');
      
    } catch (error) {
      console.error('Error posting comment:', error);
      alert(`Error posting comment: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <div className="container">
          <h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post">
      {/* Hero Section */}
      <section className="blog-post-hero">
        <div className="container">
          <div className="blog-post-header">
            <div className="blog-post-meta">
              <div className="blog-post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="blog-post-tag">{tag}</span>
                ))}
              </div>
              <div className="blog-post-info">
                <span className="blog-post-date">{post.date}</span>
                <span className="blog-post-read-time">{post.readTime}</span>
                <span className="blog-post-author">By {post.author}</span>
              </div>
            </div>
            <h1 className="blog-post-title">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-post-content">
        <div className="container">
          <div className="blog-post-body">
            {/* Featured Image */}
            <div className="blog-post-image">
              <img 
                src={post.image} 
                alt={post.title}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            
            {/* Blog Content */}
            <div 
              className="blog-post-text"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="blog-post-comments">
        <div className="container">
          <h2 className="comments-title">Leave a Comment</h2>
          <p className="comments-subtitle">
            Share your thoughtful insights and feedback on this article.
          </p>
          
          {/* Comment Form */}
          <form onSubmit={handleSubmitComment} className="comment-form">
            <div className="comment-form-row">
              <input
                type="text"
                placeholder="Your Name"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                className="comment-input comment-name"
                required
              />
            </div>
            <div className="comment-form-row">
              <textarea
                placeholder="Share your thoughts and insights..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="comment-input comment-text"
                rows="4"
                required
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary comment-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Posting...' : 'Post Comment'}
            </button>
          </form>

          {/* Comments List */}
          <div className="comments-list">
            <h3 className="comments-count">
              {comments.length} Comment{comments.length !== 1 ? 's' : ''}
            </h3>
            {comments.length === 0 ? (
              <p className="no-comments">Be the first to share your thoughts!</p>
            ) : (
              comments.map(comment => (
                <div key={comment.id} className="comment">
                  <div className="comment-header">
                    <span className="comment-author">{comment.author}</span>
                    <span className="comment-date">{comment.date}</span>
                  </div>
                  <div className="comment-content">{comment.content}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="blog-post-footer">
        <div className="container">
          <Link to="/blog" className="back-to-blog">
            ← Back to All Articles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 