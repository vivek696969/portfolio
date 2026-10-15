export const engineeringGuide = {
  title: 'Building a Backend Foundation with Networking & Security',
  intro: 'Backend services depend on reliable networks, clear data models, and careful handling of authentication and errors. Learning these areas together creates a practical foundation for entry-level development and technical support work.',
  sections: [
    {
      title: '1. Start with Python and web fundamentals',
      body: 'Practice Python scripting, file handling, HTML, CSS, and Git. A small log parser is a useful exercise: read input, apply explicit rules, handle malformed records, and produce structured findings. Keep the scope clear and distinguish completed work from planned extensions.',
    },
    {
      title: '2. Understand the network behind the backend',
      body: 'Study TCP/IP, DNS, ports, protocols, and SSH alongside Linux administration. These fundamentals help explain how clients reach a service and how to investigate a connection failure. Use tools such as Nmap only in an environment you own or have permission to test.',
    },
    {
      title: '3. Connect security events to system behavior',
      body: 'An authorized home lab with Wazuh, Kali Linux, Ubuntu Server, and Windows provides space to review alerts and security logs. Compare authentication events, document the evidence, and separate observations from assumptions. A suspicious event needs context before a response is chosen.',
    },
    {
      title: '4. Plan a small backend project',
      body: 'An inventory backend can introduce Product, Cart, and Order models, RESTful CRUD endpoints, request validation, authentication concepts, and ORM-based persistence. Django ORM or FastAPI with SQLAlchemy are possible learning paths. My inventory backend is planned and not yet implemented; production payments and stock concurrency are outside its current scope.',
    },
    {
      title: '5. Apply QA habits from the beginning',
      body: 'Write test cases for valid inputs, invalid inputs, and failure conditions. Practice debugging and defect reports that include reproduction steps, expected behavior, actual behavior, and supporting evidence. Structured reporting is useful in development, testing, technical support, and security work.',
    },
    {
      title: '6. Keep learning and show the evidence',
      body: 'My learning includes completed Cisco Introduction to Cybersecurity training, with Cisco Networking Fundamentals and the Google Cybersecurity Certificate in progress. I am building toward entry-level backend, full stack, QA/software testing, and technical support opportunities while developing network and security engineering fundamentals.',
    },
  ],
}
