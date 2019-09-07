const matchups = [
  {
    week: 2,
    team: "Illinois",
    matchuptext: "Illinois (vs. UConn)",
    opponent: "UConn"
  },
  {
    week: 2,
    team: "Indiana",
    matchuptext: "Indiana (@ Eastern Illinois)",
    opponent: "Eastern Illinois"
  },
  {
    week: 2,
    team: "Iowa",
    matchuptext: "Iowa (@ Rutgers)",
    opponent: "Rutgers"
  },
  {
    week: 2,
    team: "Maryland",
    matchuptext: "Maryland (@ Syracuse)",
    opponent: "Syracuse"
  },
  {
    week: 2,
    team: "Michigan",
    matchuptext: "Michigan (@ Army)",
    opponent: "Army"
  },
  {
    week: 2,
    team: "Michigan St.",
    matchuptext: "Michigan St. (@ Western Michigan)",
    opponent: "Western Michigan"
  },
  {
    week: 2,
    team: "Minnesota",
    matchuptext: "Minnesota (vs. Fresno St.)",
    opponent: "Fresno St."
  },
  {
    week: 2,
    team: "Nebraska",
    matchuptext: "Nebraska (vs. Colorado)",
    opponent: "Colorado"
  },
  {
    week: 2,
    team: "Ohio St.",
    matchuptext: "Ohio St. (@ Cincinnati)",
    opponent: "Cincinnati"
  },
  {
    week: 2,
    team: "Penn St.",
    matchuptext: "Penn St. (@ Buffalo)",
    opponent: "Buffalo"
  },
  {
    week: 2,
    team: "Purdue",
    matchuptext: "Purdue (@ Vanderbilt)",
    opponent: "Vanderbilt"
  },
  {
    week: 2,
    team: "Rutgers",
    matchuptext: "Rutgers (vs. Iowa)",
    opponent: "Iowa"
  },
  {
    week: 2,
    team: "Wisconsin",
    matchuptext: "Wisconsin (@ Central Michigan)",
    opponent: "Central Michigan"
  },
  {
    week: 3,
    team: "Illinois",
    matchuptext: "Illinois (@ Eastern Michigan)",
    opponent: "Eastern Michigan"
  },
  {
    week: 3,
    team: "Indiana",
    matchuptext: "Indiana (@ Ohio St.)",
    opponent: "Ohio St."
  },
  {
    week: 3,
    team: "Iowa",
    matchuptext: "Iowa (vs. Iowa St.)",
    opponent: "Iowa St."
  },
  {
    week: 3,
    team: "Maryland",
    matchuptext: "Maryland (vs. Temple)",
    opponent: "Temple"
  },
  {
    week: 3,
    team: "Michigan St.",
    matchuptext: "Michigan St. (@ Arizona St.)",
    opponent: "Arizona St."
  },
  {
    week: 3,
    team: "Minnesota",
    matchuptext: "Minnesota (@ Georgia Southern)",
    opponent: "Georgia Southern"
  },
  {
    week: 3,
    team: "Nebraska",
    matchuptext: "Nebraska (@ Northern Illinois)",
    opponent: "Northern Illinois"
  },
  {
    week: 3,
    team: "Northwestern",
    matchuptext: "Northwestern (@ UNLV)",
    opponent: "UNLV"
  },
  {
    week: 3,
    team: "Ohio St.",
    matchuptext: "Ohio St. (vs. Indiana)",
    opponent: "Indiana"
  },
  {
    week: 3,
    team: "Penn St.",
    matchuptext: "Penn St. (@ Pittsburgh)",
    opponent: "Pittsburgh"
  },
  {
    week: 3,
    team: "Purdue",
    matchuptext: "Purdue (@ TCU)",
    opponent: "TCU"
  },
  {
    week: 4,
    team: "Illinois",
    matchuptext: "Illinois (@ Nebraska)",
    opponent: "Nebraska"
  },
  {
    week: 4,
    team: "Indiana",
    matchuptext: "Indiana (@ UConn)",
    opponent: "UConn"
  },
  {
    week: 4,
    team: "Michigan",
    matchuptext: "Michigan (vs. Wisconsin)",
    opponent: "Wisconsin"
  },
  {
    week: 4,
    team: "Michigan St.",
    matchuptext: "Michigan St. (vs. Northwestern)",
    opponent: "Northwestern"
  },
  {
    week: 4,
    team: "Nebraska",
    matchuptext: "Nebraska (vs. Illinois)",
    opponent: "Illinois"
  },
  {
    week: 4,
    team: "Northwestern",
    matchuptext: "Northwestern (@ Michigan St.)",
    opponent: "Michigan St."
  },
  {
    week: 4,
    team: "Ohio St.",
    matchuptext: "Ohio St. (@ Miami (OH))",
    opponent: "Miami (OH)"
  },
  {
    week: 4,
    team: "Rutgers",
    matchuptext: "Rutgers (@ Boston College)",
    opponent: "Boston College"
  },
  {
    week: 4,
    team: "Wisconsin",
    matchuptext: "Wisconsin (@ Michigan)",
    opponent: "Michigan"
  },
  {
    week: 5,
    team: "Indiana",
    matchuptext: "Indiana (vs. Michigan St.)",
    opponent: "Michigan St."
  },
  {
    week: 5,
    team: "Iowa",
    matchuptext: "Iowa (@ Middle Tennessee)",
    opponent: "Middle Tennessee"
  },
  {
    week: 5,
    team: "Maryland",
    matchuptext: "Maryland (@ Penn St.)",
    opponent: "Penn St."
  },
  {
    week: 5,
    team: "Michigan",
    matchuptext: "Michigan (@ Rutgers)",
    opponent: "Rutgers"
  },
  {
    week: 5,
    team: "Michigan St.",
    matchuptext: "Michigan St. (@ Indiana)",
    opponent: "Indiana"
  },
  {
    week: 5,
    team: "Minnesota",
    matchuptext: "Minnesota (vs. Purdue)",
    opponent: "Purdue"
  },
  {
    week: 5,
    team: "Nebraska",
    matchuptext: "Nebraska (@ Ohio St.)",
    opponent: "Ohio St."
  },
  {
    week: 5,
    team: "Northwestern",
    matchuptext: "Northwestern (vs. Wisconsin)",
    opponent: "Wisconsin"
  },
  {
    week: 5,
    team: "Ohio St.",
    matchuptext: "Ohio St. (vs. Nebraska)",
    opponent: "Nebraska"
  },
  {
    week: 5,
    team: "Penn St.",
    matchuptext: "Penn St. (vs. Maryland)",
    opponent: "Maryland"
  },
  {
    week: 5,
    team: "Purdue",
    matchuptext: "Purdue (@ Minnesota)",
    opponent: "Minnesota"
  },
  {
    week: 5,
    team: "Rutgers",
    matchuptext: "Rutgers (vs. Michigan)",
    opponent: "Michigan"
  },
  {
    week: 5,
    team: "Wisconsin",
    matchuptext: "Wisconsin (@ Northwestern)",
    opponent: "Northwestern"
  },
  {
    week: 6,
    team: "Illinois",
    matchuptext: "Illinois (vs. Minnesota)",
    opponent: "Minnesota"
  },
  {
    week: 6,
    team: "Iowa",
    matchuptext: "Iowa (vs. Michigan)",
    opponent: "Michigan"
  },
  {
    week: 6,
    team: "Maryland",
    matchuptext: "Maryland (vs. Rutgers)",
    opponent: "Rutgers"
  },
  {
    week: 6,
    team: "Michigan",
    matchuptext: "Michigan (@ Iowa)",
    opponent: "Iowa"
  },
  {
    week: 6,
    team: "Michigan St.",
    matchuptext: "Michigan St. (vs. Ohio St.)",
    opponent: "Ohio St."
  },
  {
    week: 6,
    team: "Minnesota",
    matchuptext: "Minnesota (@ Illinois)",
    opponent: "Illinois"
  },
  {
    week: 6,
    team: "Nebraska",
    matchuptext: "Nebraska (@ Northwestern)",
    opponent: "Northwestern"
  },
  {
    week: 6,
    team: "Northwestern",
    matchuptext: "Northwestern (vs. Nebraska)",
    opponent: "Nebraska"
  },
  {
    week: 6,
    team: "Ohio St.",
    matchuptext: "Ohio St. (@ Michigan St.)",
    opponent: "Michigan St."
  },
  {
    week: 6,
    team: "Penn St.",
    matchuptext: "Penn St. (@ Purdue)",
    opponent: "Purdue"
  },
  {
    week: 6,
    team: "Purdue",
    matchuptext: "Purdue (vs. Penn St.)",
    opponent: "Penn St."
  },
  {
    week: 6,
    team: "Rutgers",
    matchuptext: "Rutgers (@ Maryland)",
    opponent: "Maryland"
  },
  {
    week: 6,
    team: "Wisconsin",
    matchuptext: "Wisconsin (@ Kent St.)",
    opponent: "Kent St."
  },
  {
    week: 7,
    team: "Illinois",
    matchuptext: "Illinois (@ Michigan)",
    opponent: "Michigan"
  },
  {
    week: 7,
    team: "Indiana",
    matchuptext: "Indiana (@ Rutgers)",
    opponent: "Rutgers"
  },
  {
    week: 7,
    team: "Iowa",
    matchuptext: "Iowa (@ Penn St.)",
    opponent: "Penn St."
  },
  {
    week: 7,
    team: "Maryland",
    matchuptext: "Maryland (vs. Purdue)",
    opponent: "Purdue"
  },
  {
    week: 7,
    team: "Michigan",
    matchuptext: "Michigan (vs. Illinois)",
    opponent: "Illinois"
  },
  {
    week: 7,
    team: "Michigan St.",
    matchuptext: "Michigan St. (vs. Wisconsin)",
    opponent: "Wisconsin"
  },
  {
    week: 7,
    team: "Minnesota",
    matchuptext: "Minnesota (@ Nebraska)",
    opponent: "Nebraska"
  },
  {
    week: 7,
    team: "Nebraska",
    matchuptext: "Nebraska (vs. Minnesota)",
    opponent: "Minnesota"
  },
  {
    week: 7,
    team: "Penn St.",
    matchuptext: "Penn St. (vs. Iowa)",
    opponent: "Iowa"
  },
  {
    week: 7,
    team: "Purdue",
    matchuptext: "Purdue (@ Maryland)",
    opponent: "Maryland"
  },
  {
    week: 7,
    team: "Rutgers",
    matchuptext: "Rutgers (vs. Indiana)",
    opponent: "Indiana"
  },
  {
    week: 7,
    team: "Wisconsin",
    matchuptext: "Wisconsin (@ Michigan St.)",
    opponent: "Michigan St."
  },
  {
    week: 8,
    team: "Illinois",
    matchuptext: "Illinois (@ Wisconsin)",
    opponent: "Wisconsin"
  },
  {
    week: 8,
    team: "Indiana",
    matchuptext: "Indiana (vs. Maryland)",
    opponent: "Maryland"
  },
  {
    week: 8,
    team: "Iowa",
    matchuptext: "Iowa (@ Purdue)",
    opponent: "Purdue"
  },
  {
    week: 8,
    team: "Maryland",
    matchuptext: "Maryland (@ Indiana)",
    opponent: "Indiana"
  },
  {
    week: 8,
    team: "Michigan",
    matchuptext: "Michigan (vs. Penn St.)",
    opponent: "Penn St."
  },
  {
    week: 8,
    team: "Minnesota",
    matchuptext: "Minnesota (vs. Rutgers)",
    opponent: "Rutgers"
  },
  {
    week: 8,
    team: "Northwestern",
    matchuptext: "Northwestern (@ Ohio St.)",
    opponent: "Ohio St."
  },
  {
    week: 8,
    team: "Ohio St.",
    matchuptext: "Ohio St. (vs. Northwestern)",
    opponent: "Northwestern"
  },
  {
    week: 8,
    team: "Penn St.",
    matchuptext: "Penn St. (@ Michigan)",
    opponent: "Michigan"
  },
  {
    week: 8,
    team: "Purdue",
    matchuptext: "Purdue (vs. Iowa)",
    opponent: "Iowa"
  },
  {
    week: 8,
    team: "Rutgers",
    matchuptext: "Rutgers (@ Minnesota)",
    opponent: "Minnesota"
  },
  {
    week: 8,
    team: "Wisconsin",
    matchuptext: "Wisconsin (vs. Illinois)",
    opponent: "Illinois"
  },
  {
    week: 9,
    team: "Illinois",
    matchuptext: "Illinois (vs. Purdue)",
    opponent: "Purdue"
  },
  {
    week: 9,
    team: "Indiana",
    matchuptext: "Indiana (vs. Nebraska)",
    opponent: "Nebraska"
  },
  {
    week: 9,
    team: "Iowa",
    matchuptext: "Iowa (vs. Northwestern)",
    opponent: "Northwestern"
  },
  {
    week: 9,
    team: "Maryland",
    matchuptext: "Maryland (vs. Minnesota)",
    opponent: "Minnesota"
  },
  {
    week: 9,
    team: "Michigan",
    matchuptext: "Michigan (@ Notre Dame)",
    opponent: "Notre Dame"
  },
  {
    week: 9,
    team: "Michigan St.",
    matchuptext: "Michigan St. (@ Penn St.)",
    opponent: "Penn St."
  },
  {
    week: 9,
    team: "Minnesota",
    matchuptext: "Minnesota (@ Maryland)",
    opponent: "Maryland"
  },
  {
    week: 9,
    team: "Nebraska",
    matchuptext: "Nebraska (@ Indiana)",
    opponent: "Indiana"
  },
  {
    week: 9,
    team: "Northwestern",
    matchuptext: "Northwestern (@ Iowa)",
    opponent: "Iowa"
  },
  {
    week: 9,
    team: "Ohio St.",
    matchuptext: "Ohio St. (@ Wisconsin)",
    opponent: "Wisconsin"
  },
  {
    week: 9,
    team: "Penn St.",
    matchuptext: "Penn St. (vs. Michigan St.)",
    opponent: "Michigan St."
  },
  {
    week: 9,
    team: "Purdue",
    matchuptext: "Purdue (@ Illinois)",
    opponent: "Illinois"
  },
  {
    week: 9,
    team: "Rutgers",
    matchuptext: "Rutgers (@ Liberty)",
    opponent: "Liberty"
  },
  {
    week: 9,
    team: "Wisconsin",
    matchuptext: "Wisconsin (vs. Ohio St.)",
    opponent: "Ohio St."
  },
  {
    week: 10,
    team: "Illinois",
    matchuptext: "Illinois (@ Rutgers)",
    opponent: "Rutgers"
  },
  {
    week: 10,
    team: "Indiana",
    matchuptext: "Indiana (@ Northwestern)",
    opponent: "Northwestern"
  },
  {
    week: 10,
    team: "Maryland",
    matchuptext: "Maryland (@ Michigan)",
    opponent: "Michigan"
  },
  {
    week: 10,
    team: "Michigan",
    matchuptext: "Michigan (vs. Maryland)",
    opponent: "Maryland"
  },
  {
    week: 10,
    team: "Nebraska",
    matchuptext: "Nebraska (vs. Purdue)",
    opponent: "Purdue"
  },
  {
    week: 10,
    team: "Northwestern",
    matchuptext: "Northwestern (vs. Indiana)",
    opponent: "Indiana"
  },
  {
    week: 10,
    team: "Purdue",
    matchuptext: "Purdue (@ Nebraska)",
    opponent: "Nebraska"
  },
  {
    week: 10,
    team: "Rutgers",
    matchuptext: "Rutgers (vs. Illinois)",
    opponent: "Illinois"
  },
  {
    week: 11,
    team: "Illinois",
    matchuptext: "Illinois (vs. Michigan St.)",
    opponent: "Michigan St."
  },
  {
    week: 11,
    team: "Iowa",
    matchuptext: "Iowa (vs. Wisconsin)",
    opponent: "Wisconsin"
  },
  {
    week: 11,
    team: "Maryland",
    matchuptext: "Maryland (vs. Ohio St.)",
    opponent: "Ohio St."
  },
  {
    week: 11,
    team: "Michigan St.",
    matchuptext: "Michigan St. (@ Illinois)",
    opponent: "Illinois"
  },
  {
    week: 11,
    team: "Minnesota",
    matchuptext: "Minnesota (@ Penn St.)",
    opponent: "Penn St."
  },
  {
    week: 11,
    team: "Northwestern",
    matchuptext: "Northwestern (@ Purdue)",
    opponent: "Purdue"
  },
  {
    week: 11,
    team: "Ohio St.",
    matchuptext: "Ohio St. (@ Maryland)",
    opponent: "Maryland"
  },
  {
    week: 11,
    team: "Penn St.",
    matchuptext: "Penn St. (vs. Minnesota)",
    opponent: "Minnesota"
  },
  {
    week: 11,
    team: "Purdue",
    matchuptext: "Purdue (vs. Northwestern)",
    opponent: "Northwestern"
  },
  {
    week: 11,
    team: "Wisconsin",
    matchuptext: "Wisconsin (@ Iowa)",
    opponent: "Iowa"
  },
  {
    week: 12,
    team: "Indiana",
    matchuptext: "Indiana (vs. Penn St.)",
    opponent: "Penn St."
  },
  {
    week: 12,
    team: "Iowa",
    matchuptext: "Iowa (@ Minnesota)",
    opponent: "Minnesota"
  },
  {
    week: 12,
    team: "Michigan",
    matchuptext: "Michigan (@ Michigan St.)",
    opponent: "Michigan St."
  },
  {
    week: 12,
    team: "Michigan St.",
    matchuptext: "Michigan St. (vs. Michigan)",
    opponent: "Michigan"
  },
  {
    week: 12,
    team: "Minnesota",
    matchuptext: "Minnesota (vs. Iowa)",
    opponent: "Iowa"
  },
  {
    week: 12,
    team: "Nebraska",
    matchuptext: "Nebraska (@ Wisconsin)",
    opponent: "Wisconsin"
  },
  {
    week: 12,
    team: "Northwestern",
    matchuptext: "Northwestern (@ UMass)",
    opponent: "UMass"
  },
  {
    week: 12,
    team: "Ohio St.",
    matchuptext: "Ohio St. (vs. Rutgers)",
    opponent: "Rutgers"
  },
  {
    week: 12,
    team: "Penn St.",
    matchuptext: "Penn St. (@ Indiana)",
    opponent: "Indiana"
  },
  {
    week: 12,
    team: "Rutgers",
    matchuptext: "Rutgers (@ Ohio St.)",
    opponent: "Ohio St."
  },
  {
    week: 12,
    team: "Wisconsin",
    matchuptext: "Wisconsin (vs. Nebraska)",
    opponent: "Nebraska"
  },
  {
    week: 13,
    team: "Illinois",
    matchuptext: "Illinois (vs. Iowa)",
    opponent: "Iowa"
  },
  {
    week: 13,
    team: "Indiana",
    matchuptext: "Indiana (@ Michigan)",
    opponent: "Michigan"
  },
  {
    week: 13,
    team: "Iowa",
    matchuptext: "Iowa (@ Illinois)",
    opponent: "Illinois"
  },
  {
    week: 13,
    team: "Maryland",
    matchuptext: "Maryland (@ Nebraska)",
    opponent: "Nebraska"
  },
  {
    week: 13,
    team: "Michigan",
    matchuptext: "Michigan (vs. Indiana)",
    opponent: "Indiana"
  },
  {
    week: 13,
    team: "Michigan St.",
    matchuptext: "Michigan St. (vs. Rutgers)",
    opponent: "Rutgers"
  },
  {
    week: 13,
    team: "Minnesota",
    matchuptext: "Minnesota (vs. Northwestern)",
    opponent: "Northwestern"
  },
  {
    week: 13,
    team: "Nebraska",
    matchuptext: "Nebraska (vs. Maryland)",
    opponent: "Maryland"
  },
  {
    week: 13,
    team: "Northwestern",
    matchuptext: "Northwestern (@ Minnesota)",
    opponent: "Minnesota"
  },
  {
    week: 13,
    team: "Ohio St.",
    matchuptext: "Ohio St. (@ Penn St.)",
    opponent: "Penn St."
  },
  {
    week: 13,
    team: "Penn St.",
    matchuptext: "Penn St. (vs. Ohio St.)",
    opponent: "Ohio St."
  },
  {
    week: 13,
    team: "Purdue",
    matchuptext: "Purdue (vs. Wisconsin)",
    opponent: "Wisconsin"
  },
  {
    week: 13,
    team: "Rutgers",
    matchuptext: "Rutgers (@ Michigan St.)",
    opponent: "Michigan St."
  },
  {
    week: 13,
    team: "Wisconsin",
    matchuptext: "Wisconsin (@ Purdue)",
    opponent: "Purdue"
  },
  {
    week: 14,
    team: "Illinois",
    matchuptext: "Illinois (@ Northwestern)",
    opponent: "Northwestern"
  },
  {
    week: 14,
    team: "Indiana",
    matchuptext: "Indiana (vs. Purdue)",
    opponent: "Purdue"
  },
  {
    week: 14,
    team: "Iowa",
    matchuptext: "Iowa (vs. Nebraska)",
    opponent: "Nebraska"
  },
  {
    week: 14,
    team: "Maryland",
    matchuptext: "Maryland (vs. Michigan St.)",
    opponent: "Michigan St."
  },
  {
    week: 14,
    team: "Michigan",
    matchuptext: "Michigan (@ Ohio St.)",
    opponent: "Ohio St."
  },
  {
    week: 14,
    team: "Michigan St.",
    matchuptext: "Michigan St. (@ Maryland)",
    opponent: "Maryland"
  },
  {
    week: 14,
    team: "Minnesota",
    matchuptext: "Minnesota (@ Wisconsin)",
    opponent: "Wisconsin"
  },
  {
    week: 14,
    team: "Nebraska",
    matchuptext: "Nebraska (@ Iowa)",
    opponent: "Iowa"
  },
  {
    week: 14,
    team: "Northwestern",
    matchuptext: "Northwestern (vs. Illinois)",
    opponent: "Illinois"
  },
  {
    week: 14,
    team: "Ohio St.",
    matchuptext: "Ohio St. (vs. Michigan)",
    opponent: "Michigan"
  },
  {
    week: 14,
    team: "Penn St.",
    matchuptext: "Penn St. (@ Rutgers)",
    opponent: "Rutgers"
  },
  {
    week: 14,
    team: "Purdue",
    matchuptext: "Purdue (@ Indiana)",
    opponent: "Indiana"
  },
  {
    week: 14,
    team: "Rutgers",
    matchuptext: "Rutgers (vs. Penn St.)",
    opponent: "Penn St."
  },
  {
    week: 14,
    team: "Wisconsin",
    matchuptext: "Wisconsin (vs. Minnesota)",
    opponent: "Minnesota"
  }
];
