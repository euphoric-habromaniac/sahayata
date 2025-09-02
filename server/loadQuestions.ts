import { readFileSync } from 'fs';
import { join } from 'path';
import type { InsertQuestion } from "@shared/schema";

export function loadQuestionsFromFile(): InsertQuestion[] {
  const questionsPath = join(process.cwd(), 'questions.txt');
  const content = readFileSync(questionsPath, 'utf-8');
  
  const questions: InsertQuestion[] = [];
  
  // Parse questions for parents of children aged 8-13
  const parentQuestions8to13 = [
    {
      text: "Does your child have trouble sounding out new or unfamiliar words while reading?",
      description: "Screens for difficulties in decoding—core to dyslexia and reading challenges.",
      category: "reading",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child read much more slowly than other children their age?",
      description: "Measures reading fluency; may indicate dyslexia or general reading delay.",
      category: "reading",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child frequently make spelling errors or spell the same word differently within one piece of writing?",
      description: "Flags inconsistent spelling, which is common in dyslexia and written expression disorders.",
      category: "reading",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child have difficulty understanding or remembering what they just read?",
      description: "Assesses reading comprehension and working memory, relevant to dyslexia and broader learning concerns.",
      category: "reading",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child's writing have frequent grammar mistakes, run-on sentences, or seem disorganized?",
      description: "Screens for written expression difficulties (dysgraphia, SLD).",
      category: "reading",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Is your child's handwriting noticeably messier than that of peers?",
      description: "Assesses graphomotor issues, suggestive of dysgraphia or fine-motor difficulties.",
      category: "reading",
      ageGroup: "8-13",
      userRole: "child",
      weight: 1
    },
    {
      text: "Does your child frequently lose their place, skip lines, or skip words while reading?",
      description: "Can signal attention issues, tracking problems, or dyslexia.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child often forget instructions or need directions repeated?",
      description: "Measures working memory and attention, pertinent to ADHD and learning disorders.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Is it difficult for your child to begin or finish assignments without reminders?",
      description: "Tests executive function and motivation, possible in ADHD, anxiety, or SLD.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child frequently fidget, have trouble sitting still, or leave their seat when expected to remain seated?",
      description: "Assesses hyperactivity and impulsivity, classic in ADHD.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child seem distracted, daydream often, or struggle to pay attention to tasks?",
      description: "Screens for inattentive behaviors, important for ADHD and other concerns.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child avoid reading, writing, or math homework whenever possible?",
      description: "Behavioral avoidance signals potential anxiety or specific learning difficulties.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child appear anxious, worried, or very self-critical about schoolwork or homework?",
      description: "Looks for anxiety or low self-esteem often paired with learning disorders.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Has your child voiced frustration, sadness, or embarrassment related to academics?",
      description: "Captures mood or emotional impact of academic struggles.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Is your child disorganized or prone to losing homework, books, or other school materials?",
      description: "Screens for executive functioning difficulties, common in ADHD and learning disorders.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "child",
      weight: 1
    },
    {
      text: "Does your child blurt out answers or interrupt conversations often?",
      description: "Tests impulsivity and self-regulation, often found in ADHD.",
      category: "social",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child find it hard to stick with a task or finish things that take a while?",
      description: "Sustained attention and executive function screening; important for multiple disorders.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child struggle to remember basic math facts or do simple calculations quickly?",
      description: "Checks for math disability (dyscalculia).",
      category: "reading",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child become frustrated or give up quickly when academic tasks are challenging?",
      description: "Screens for emotional/behavioral responses to learning difficulties.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child avoid socializing, rarely has friends, or struggles with peer relationships?",
      description: "Looks for social withdrawal or social anxiety, which may co-occur with learning challenges.",
      category: "social",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child have trouble following and remembering oral directions?",
      description: "Tests auditory working memory and processing.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child struggle with taking turns or sharing in games or conversations?",
      description: "Measures social skills and self-regulation.",
      category: "social",
      ageGroup: "8-13",
      userRole: "child",
      weight: 1
    },
    {
      text: "Are your child's grades or skills much higher in some subjects than others?",
      description: "Screens for specific, rather than general, learning disabilities.",
      category: "reading",
      ageGroup: "8-13",
      userRole: "child",
      weight: 1
    },
    {
      text: "Does your child have difficulty retelling a story or summarizing what they've learned?",
      description: "Assesses verbal memory and language comprehension.",
      category: "reading",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Is your child easily distracted by noise, activity, or other people while working?",
      description: "Screens for attention, sensory, or processing challenges.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child seem restless or anxious during homework or extended reading/writing tasks?",
      description: "Identifies anxiety, hyperactivity, or academic stress indicators.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child frequently complain of headaches, stomachaches, or physical discomfort during schoolwork?",
      description: "Screens for somatic symptoms related to anxiety or stress.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "child",
      weight: 1
    },
    {
      text: "Does your child frequently ask for reassurance about their ability or performance in school?",
      description: "Looks for low self-esteem, anxiety, or perfectionism tied to learning or emotional struggles.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child have trouble recalling basic information, like days of the week or multiplication facts?",
      description: "Checks basic information retention, key in various learning disorders.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your child's mood seem to change often, especially during or after schoolwork?",
      description: "Assesses emotional reactivity, which can indicate underlying stress or learning frustration.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "child",
      weight: 2
    }
  ];

  // Questions for teachers of students aged 8-13
  const teacherQuestions8to13 = [
    {
      text: "Does the student often struggle to sound out or decode unfamiliar words when reading?",
      description: "Assesses reading-specific decoding difficulties, classic in dyslexia.",
      category: "reading",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student have noticeably slower reading fluency compared to classmates?",
      description: "Measures word reading speed; a core dyslexia marker but also relevant for general learning challenges.",
      category: "reading",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student frequently make the same spelling mistakes or spell the same word differently within a single assignment?",
      description: "Screens for inconsistent, phonologically weak spelling (dyslexia, written expression disorder).",
      category: "reading",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student have difficulty understanding or remembering what was just read?",
      description: "Assesses reading comprehension and working memory, relevant to both dyslexia and other cognitive difficulties.",
      category: "reading",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student's written work contain frequent grammar errors, incomplete thoughts, or disorganized structure?",
      description: "Measures written expression difficulties, possible in language-based learning disorders or inattentive presentations of ADHD.",
      category: "reading",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student have noticeably messy or hard-to-read handwriting compared to peers?",
      description: "Assesses graphomotor deficits, often present in dysgraphia and sometimes seen with ADHD.",
      category: "reading",
      ageGroup: "8-13",
      userRole: "student",
      weight: 1
    },
    {
      text: "Does the student often lose track of their place when reading or skip lines/words?",
      description: "Can reflect attention, visual processing, or dyslexia-related tracking issues.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student frequently forget instructions or need them repeated?",
      description: "Tests working memory and attention, important for both SLD and ADHD.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student have difficulty starting or completing assignments without repeated prompting?",
      description: "Suggests executive functioning or motivation issues, frequently seen with ADHD or mood problems.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student fidget, leave their seat at inappropriate times, or have trouble staying seated during lessons?",
      description: "Reflects hyperactivity/impulsivity, hallmark of ADHD.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student daydream, appear distracted, or struggle to focus on lessons or tasks?",
      description: "Screens for inattentiveness, possible in ADHD, anxiety, or learning disorders.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student avoid reading, writing, or math tasks whenever possible?",
      description: "Behavioral avoidance often signals anxiety or specific learning challenges.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student appear anxious, worried, or overly self-critical about schoolwork?",
      description: "Screens for symptoms of anxiety or low self-esteem, often co-occurring with learning disabilities.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Has the student expressed frustration, sadness, or embarrassment related to academic tasks?",
      description: "Measures emotional impact and internalizing symptoms associated with academic struggles.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student have difficulty organizing materials (e.g., losing homework, messy desk)?",
      description: "Screens for executive functioning or inattentive behaviors, common in ADHD and some learning disorders.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "student",
      weight: 1
    },
    {
      text: "Does the student speak or blurt out answers without raising their hand or listening for instructions?",
      description: "Impulsivity and poor self-regulation, seen in ADHD and some behavioral disorders.",
      category: "social",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student have trouble staying on task or completing multi-step activities?",
      description: "Tests sustained attention and executive function, relevant to multiple learning and behavioral disorders.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student struggle to remember basic math facts or have slow math computation skills?",
      description: "Screens for math-based learning disorder (dyscalculia).",
      category: "reading",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student display frequent avoidance, frustration, or 'giving up' with challenging schoolwork?",
      description: "Behavioral response to repeated academic struggle; flags possible SLDs, anxiety, or low mood.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student seem withdrawn, rarely participate, or have difficulty making friends?",
      description: "Reflects possible social anxiety, depression, or withdrawal due to academic struggles.",
      category: "social",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student have difficulty following and remembering oral directions?",
      description: "Tests auditory working memory and attention, critical for learning and often impaired in SLD and ADHD.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "During group tasks, does the student have trouble cooperating or waiting their turn?",
      description: "Assesses social skills, impulsivity, and executive function.",
      category: "social",
      ageGroup: "8-13",
      userRole: "student",
      weight: 1
    },
    {
      text: "Does the student show inconsistent academic performance across different subjects or tasks?",
      description: "Screens for specific learning profiles, which help distinguish SLD from generalized cognitive or motivational issues.",
      category: "reading",
      ageGroup: "8-13",
      userRole: "student",
      weight: 1
    },
    {
      text: "Does the student have difficulty retelling a story or summarizing information they have just learned?",
      description: "Evaluates language comprehension and verbal memory.",
      category: "reading",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student become easily overwhelmed or distracted by noise or activity around them?",
      description: "Auditory or sensory distractibility, associated with ADHD, anxiety, or processing issues.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student appear restless or agitated during quiet, independent work periods?",
      description: "Screens for hyperactivity or anxiety.",
      category: "attention",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student express physical complaints (e.g., headache, stomachache) during academic activities?",
      description: "Somatic symptoms may signal anxiety, stress, or emotional impact of learning challenges.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "student",
      weight: 1
    },
    {
      text: "Does the student require frequent reassurance about their performance or abilities?",
      description: "Indicates low self-esteem or anxiety, often secondary to repeated learning challenges.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student have trouble recalling basic facts (like days of the week or multiplication tables)?",
      description: "Basic fact retrieval deficits, possible in SLD (especially dyscalculia or dyslexia).",
      category: "attention",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student show frequent mood changes, irritability, or signs of distress during school activities?",
      description: "Emotional regulation issues may be linked to underlying anxiety, depression, or frustration with school demands.",
      category: "emotional",
      ageGroup: "8-13",
      userRole: "student",
      weight: 2
    }
  ];

  // Questions for parents of teenagers (14-19)
  const parentQuestions14to19 = [
    {
      text: "Does your teenager read more slowly than peers, even with familiar texts?",
      description: "Assesses ongoing reading fluency issues common in adolescent dyslexia.",
      category: "reading",
      ageGroup: "14-19",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your teenager avoid reading aloud at home or in social settings?",
      description: "Behavioral avoidance often linked to reading anxiety and self-consciousness about reading skills.",
      category: "emotional",
      ageGroup: "14-19",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your teenager have trouble with written assignments, especially organizing thoughts or using proper grammar?",
      description: "Written expression difficulties persist into adolescence with dysgraphia and language-based learning disorders.",
      category: "reading",
      ageGroup: "14-19",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your teenager struggle with time management or completing long-term projects?",
      description: "Executive functioning challenges become more apparent as academic demands increase.",
      category: "attention",
      ageGroup: "14-19",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your teenager have difficulty following multi-step directions or remembering sequences?",
      description: "Working memory and sequencing issues that impact daily functioning and academic performance.",
      category: "attention",
      ageGroup: "14-19",
      userRole: "child",
      weight: 2
    },
    {
      text: "Is your teenager frequently disorganized with belongings, schoolwork, or personal space?",
      description: "Organizational challenges that may indicate ADHD or executive function disorders.",
      category: "attention",
      ageGroup: "14-19",
      userRole: "child",
      weight: 1
    },
    {
      text: "Does your teenager seem overwhelmed by academic or social demands?",
      description: "May indicate anxiety, depression, or difficulty coping with increased teenage responsibilities.",
      category: "emotional",
      ageGroup: "14-19",
      userRole: "child",
      weight: 2
    },
    {
      text: "Has your teenager expressed feelings of being 'different' or 'not as smart' as peers?",
      description: "Self-esteem issues often emerge in adolescence when learning differences become more apparent.",
      category: "emotional",
      ageGroup: "14-19",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your teenager avoid challenging academic subjects or extracurricular activities?",
      description: "Avoidance behaviors that may stem from repeated academic struggles or fear of failure.",
      category: "emotional",
      ageGroup: "14-19",
      userRole: "child",
      weight: 2
    },
    {
      text: "Does your teenager have difficulty making or maintaining friendships?",
      description: "Social challenges that may indicate autism spectrum traits, social anxiety, or communication difficulties.",
      category: "social",
      ageGroup: "14-19",
      userRole: "child",
      weight: 2
    }
  ];

  // Questions for teachers of students aged 14-19
  const teacherQuestions14to19 = [
    {
      text: "Does the student struggle with reading comprehension of grade-level texts?",
      description: "Reading comprehension difficulties that persist into high school may indicate dyslexia or language processing issues.",
      category: "reading",
      ageGroup: "14-19",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student have difficulty with written expression, especially organizing ideas coherently?",
      description: "Written language disorders become more apparent as writing demands increase in secondary school.",
      category: "reading",
      ageGroup: "14-19",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student struggle with note-taking or following lectures?",
      description: "May indicate auditory processing difficulties, attention issues, or working memory challenges.",
      category: "attention",
      ageGroup: "14-19",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student have trouble with time management and meeting deadlines?",
      description: "Executive functioning challenges that become more problematic as independence expectations increase.",
      category: "attention",
      ageGroup: "14-19",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student seem anxious about academic performance or avoid participating in class?",
      description: "May indicate anxiety disorders, social anxiety, or academic anxiety stemming from learning difficulties.",
      category: "emotional",
      ageGroup: "14-19",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student have difficulty working independently on assignments?",
      description: "Independence challenges may indicate executive function issues, attention disorders, or learned helplessness.",
      category: "attention",
      ageGroup: "14-19",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student show inconsistent academic performance across different subjects?",
      description: "Specific learning disabilities often manifest as significant discrepancies between subject areas.",
      category: "reading",
      ageGroup: "14-19",
      userRole: "student",
      weight: 1
    },
    {
      text: "Does the student appear withdrawn or have difficulty interacting with peers appropriately?",
      description: "Social difficulties that may indicate autism spectrum traits, social anxiety, or depression.",
      category: "social",
      ageGroup: "14-19",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student have trouble understanding abstract concepts or making inferences?",
      description: "Higher-order thinking challenges that may indicate learning disabilities or intellectual disabilities.",
      category: "reading",
      ageGroup: "14-19",
      userRole: "student",
      weight: 2
    },
    {
      text: "Does the student seem easily overwhelmed by academic or social demands?",
      description: "May indicate anxiety, depression, or difficulty with executive functioning and stress management.",
      category: "emotional",
      ageGroup: "14-19",
      userRole: "student",
      weight: 2
    }
  ];

  // Questions for individuals assessing themselves
  const selfAssessmentQuestions = [
    {
      text: "Do you often have trouble concentrating on tasks or activities for extended periods?",
      description: "Self-reported attention difficulties that may indicate ADHD or anxiety disorders.",
      category: "attention",
      ageGroup: null,
      userRole: "myself",
      weight: 2
    },
    {
      text: "Do you frequently feel anxious or worried about daily activities or future events?",
      description: "Self-reported anxiety symptoms that may indicate generalized anxiety disorder or specific phobias.",
      category: "emotional",
      ageGroup: null,
      userRole: "myself",
      weight: 2
    },
    {
      text: "Do you have difficulty with reading comprehension or reading fluency?",
      description: "Self-reported reading difficulties that may indicate dyslexia or other reading disorders.",
      category: "reading",
      ageGroup: null,
      userRole: "myself",
      weight: 2
    },
    {
      text: "Do you find it challenging to organize your thoughts when writing or speaking?",
      description: "Communication and organization difficulties that may indicate language processing or attention issues.",
      category: "reading",
      ageGroup: null,
      userRole: "myself",
      weight: 2
    },
    {
      text: "Do you often feel overwhelmed by social situations or have difficulty reading social cues?",
      description: "Social challenges that may indicate autism spectrum traits, social anxiety, or communication disorders.",
      category: "social",
      ageGroup: null,
      userRole: "myself",
      weight: 2
    },
    {
      text: "Do you have trouble managing time or frequently miss deadlines?",
      description: "Executive functioning challenges that may indicate ADHD or other attention-related disorders.",
      category: "attention",
      ageGroup: null,
      userRole: "myself",
      weight: 2
    },
    {
      text: "Do you experience frequent mood changes or have difficulty regulating emotions?",
      description: "Emotional regulation difficulties that may indicate mood disorders, ADHD, or trauma-related conditions.",
      category: "emotional",
      ageGroup: null,
      userRole: "myself",
      weight: 2
    },
    {
      text: "Do you often feel misunderstood or different from others in social or academic settings?",
      description: "Self-perception issues that may indicate underlying neurodevelopmental differences or mental health concerns.",
      category: "social",
      ageGroup: null,
      userRole: "myself",
      weight: 2
    }
  ];

  return [
    ...parentQuestions8to13,
    ...teacherQuestions8to13,
    ...parentQuestions14to19,
    ...teacherQuestions14to19,
    ...selfAssessmentQuestions
  ];
}