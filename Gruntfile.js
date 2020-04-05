const rulesConfigInfra = require("rules-config/infra");
const IDI = require("openchs-idi");

module.exports = IDI.configure(
    {
        name: "Sambhavna",
        "chs-admin": "admin",
        "org-name": "Sambhavna",
        "org-admin": "admin@sambhavna",
        secrets: "../secrets.json",
        files: {
            adminUsers: {
                dev: []
            },
            forms: [
                "forms/COVID-19.json",
                "forms/Household details.json",
                "forms/Household Registration.json",
                "forms/Individual Registration.json",
            ],
            formMappings: [
                "formMappings.json"
            ],
            formDeletions: [],
            formAdditions: [],
            catchments: [],
            checklistDetails: [],
            concepts: [
                "concepts.json"
            ],
            addressLevelTypes: [],
            locations: [],
            programs: [
                "programs.json"
            ],
            encounterTypes: [
                "encounterTypes.json"
            ],
            operationalEncounterTypes: [
                "operationalEncounterTypes.json"
            ],
            operationalPrograms: [
                "operationalPrograms.json"
            ],
            subjectTypes: [
                "subjectTypes.json"
            ],
            operationalSubjectTypes: [
                "operationalSubjectTypes.json"
            ],
            users: {
                dev: []
            },
            rules: [],
            organisationSql: [],
            "organisationConfig": [
                "organisationConfig.json"
            ],
            "translations": []
        }
    },
    rulesConfigInfra
);
