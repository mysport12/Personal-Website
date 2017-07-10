import 'bootstrap-css';
var styles = require('resume.css');

function Res() {

    $('.active').removeClass('active');
    $('#resPage').addClass('active');

    function Work() {

	    function Employer(name: String, location: String, jobs: Array) {
			this.name = name;
			this.location = location;
			this.jobs = jobs;
		}

		function Job(title: String, description: Array, date: String) {
			this.title = title;
			this.description = description;
			this.date = date;
		}

		const engLead = new Job (
			'Engineering Team Lead',
			['Led the engineering effort to close down our business unit and transfer product lines to other facilities (internal and external)',
			'Led the qualification and startup of product lines that were remaining on the current campus',
			'Assisted operations with day to day management of ongoing manufacturing activities'],
			'June 2016 - Present'
		);

		const opManage = new Job (
			'Operations Manager',
			['Managed a $10 million/year business unit and met all SQDC goals',
			'Increased our on time delivery success and reduced overtime by improving the way we planned work',
			'Managed a team of 8-10 direct reports across Operations, Engineering, and Safety'],
			'October 2015 - June 2016'
		);

		const srEng = new Job (
			'Sr. Manufacturing Engineer',
			['Provided labor and material estimates for new and existing product quotes',
			'Managed new product development trials and coordinated with operations to reduce impact to ongoing operations',
			'Led cost reduction process improvement projects on the manufacturing floor',
			'Completed migration of process documentation into our new PLM system'],
			'October 2014 - October 2015'
		);

		const processEng = new Job (
			'Process Engineer',
			['Began migration of process documentation into our new PLM system',
			'Led cost reduction process improvement projects on the manufacturing floor',
			'Reviewed and updated BOM and Routing information in SAP to align actuals with standards'],
			'January 2014 - October 2014'
		);

		const valLeader = new Job (
			'Value Stream Leader',
			['Managed a team of 40-45 associates across three production shifts',
			'Managed the value stream of a $6-$7 million/year product line from receiving inspection through product shipment',
			'Worked daily with cross-functional team members to ensure production met required SQDC goals until program closure at the end of 2013'],
			'November 2012 - December 2013'
		);

		const qualEng = new Job (
			'Quality Engineer',
			['Performed Gage R&R studies to better understand capability of our measurement techniques',
			'Led RCCA activities to dive into problems and identify root cause with minimal impact to production',
			'Created work instructions and inspection templates for quality inspectors'],
			'August 2011 - November 2012'
		);

		const qualEngIntern = new Job (
			'Quality Engineer Intern',
			['Compiled and analyzed process data for senior QEs to identify and understand KPIs',
			'Wrote Excel macros to streamline data collection and analysis',
			'Created work instructions for manufacturing floor personnel that captured undocumented tribal knowledge'],
			'July 2010 - August 2011'
		);

		const commAssist = new Job (
			'Community Assistant',
			'',
			'August 2009 - May 2010'
		);

		const cashier = new Job (
			'Cashier, Food Prep, and Custodian',
			'',
			'January 2008 - October 2010'
		);

		const maintenance = new Job (
			'Maintenance',
			'',
			'May 2008 – August 2008'
		);

		const landscape = new Job (
			'“Workreation” (general labor and landscaping)',
			'',
			'June 2006 – August 2006'
		);

		const counselor = new Job (
			'Camp Counselor',
			'',
			'June 2005 – August 2005'
		);

		const aecJobs = [engLead, opManage, srEng, processEng, valLeader, qualEng, qualEngIntern];
		const unhJobs = [commAssist, cashier];

		const albany = new Employer('Albany Engineered Composites', 'Rochester, NH', aecJobs);
		const unh = new Employer('University of New Hampshire', 'Durham, NH', unhJobs);
		const mww = new Employer('Manchester Water Works', 'Manchester, NH', [maintenance]);
		const mpr = new Employer('Manchester Parks and Recreation', 'Manchester, NH', [landscape]);
		const ymca = new Employer('Merrimack YMCA', 'Merrimack, NH', [counselor]);

		function JobArray(props) {

			var jobList = [];

			function JobDescription(props) {

				var descItems = [];

				for(var i = 0; i<props.description.length; i++) {
					descItems.push(<li id='jobDescription' key={props.description[i]}>{props.description[i]}</li>)
				};

				return <ul>{descItems}</ul>
			}

			for (var j = 0; j<props.jobs.length; j++) {
				jobList.push(
					<li id='jobTitle' key={props.jobs[j].title}>{props.jobs[j].title}<span id='jobDate' key={props.jobs[j].date}> ({props.jobs[j].date})</span>
						<JobDescription description={props.jobs[j].description}/>
					</li>
				);

			};

			return <ul>{jobList}</ul>

		}

		return (
			<div className={styles.resume}>
				<div className={styles.resSection}>
					<h3 className={styles.schoolList}>EDUCATION</h3>
					<hr/>
					<ul>
						<li>University of New Hampshire <span>(Durham, New Hampshire)</span>
							<ul>
								<li>Bachelor of Science in Chemical Engineering <span>(May 2011)</span></li>
								<li>Master of Business Administration (MBA) <span>(September 2014)</span></li>
							</ul>
						</li>
					</ul>
				</div>
				<div className={styles.resSection}>
					<h3 className={styles.certList}>PROFESSIONAL CERTIFICATIONS</h3>
					<hr/>
					<ul>
						<li>Engineer-In-Training (EIT)</li>
						<li>Project Management Professional (PMP)</li>
						<li>Six Sigma Green Belt</li>
					</ul>
				</div>
				<div className={styles.resSection}>
					<h3 className={styles.techList}>TECHNICAL EXPERIENCE</h3>
					<hr/>
					<ul>
						<li>Microsoft Word, Excel, PowerPoint, Visio, Skype, Project, SharePoint, SAP,
              Windchill, SolidWorks, and MiniTab</li>
						<li>HTML, CSS, JavaScript, React,
  						React Native, Redux, Expo, MongoDB, Java, SQL, WordPress, Swift, Visual Basic</li>
					</ul>
				</div>
				<div className={styles.resSection}>
					<h3 className={styles.workExp}>WORK EXPERIENCE</h3>
					<hr/>
					<ul className={styles.workList}>
						<li className={styles.employer}>{albany.name} ({albany.location})</li>
						<JobArray jobs={albany.jobs}/>
						<li className={styles.employer}>{unh.name} ({unh.location})</li>
						<JobArray jobs={unh.jobs}/>
						<li className={styles.employer}>{mww.name} ({mww.location})</li>
						<JobArray jobs={mww.jobs}/>
						<li className={styles.employer}>{mpr.name} ({mpr.location})</li>
						<JobArray jobs={mpr.jobs}/>
						<li className={styles.employer}>{ymca.name} ({ymca.location})</li>
						<JobArray jobs={ymca.jobs}/>
					</ul>
				</div>
			</div>
			)
	}

	return (
		<div>
			<div className={styles.header}>
				<h1>Resum&#233;</h1>
				<hr/>
			</div>
			<div className='container-fluid'>
				<div className='row'>
					<Work />
				</div>
			</div>
		</div>
	)
}

module.exports = Res;
