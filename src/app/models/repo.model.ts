export class Repo {

    constructor(
        public id:string,
        public url: string,
        public full_name: string,
        public name: string,
        public description: string,
        public forks_count: number,
        public stargazers_count: number,
        public open_issues: number,
        public html_url: string) {

    }

    static fromJsonList(array): Repo[] {
        return array.map(Repo.fromJson);
    }

    static fromJson({
        id,
        url,
        full_name,
        name,
        description,
        forks_count,
        stargazers_count,
        open_issues,
        html_url}):Repo {

        return new Repo(id,
        url,
        full_name,
        name,
        description,
        forks_count,
        stargazers_count,
        open_issues,
        html_url);
    }

}


/*
id: 2126244,
name: "bootstrap",
full_name: "twbs/bootstrap",
owner: {},
private: false,
html_url: "https://github.com/twbs/bootstrap",
description: "The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.",
fork: false,
url: "https://api.github.com/repos/twbs/bootstrap",
forks_url: "https://api.github.com/repos/twbs/bootstrap/forks",
keys_url: "https://api.github.com/repos/twbs/bootstrap/keys{/key_id}",
collaborators_url: "https://api.github.com/repos/twbs/bootstrap/collaborators{/collaborator}",
teams_url: "https://api.github.com/repos/twbs/bootstrap/teams",
hooks_url: "https://api.github.com/repos/twbs/bootstrap/hooks",
issue_events_url: "https://api.github.com/repos/twbs/bootstrap/issues/events{/number}",
events_url: "https://api.github.com/repos/twbs/bootstrap/events",
assignees_url: "https://api.github.com/repos/twbs/bootstrap/assignees{/user}",
branches_url: "https://api.github.com/repos/twbs/bootstrap/branches{/branch}",
tags_url: "https://api.github.com/repos/twbs/bootstrap/tags",
blobs_url: "https://api.github.com/repos/twbs/bootstrap/git/blobs{/sha}",
git_tags_url: "https://api.github.com/repos/twbs/bootstrap/git/tags{/sha}",
git_refs_url: "https://api.github.com/repos/twbs/bootstrap/git/refs{/sha}",
trees_url: "https://api.github.com/repos/twbs/bootstrap/git/trees{/sha}",
statuses_url: "https://api.github.com/repos/twbs/bootstrap/statuses/{sha}",
languages_url: "https://api.github.com/repos/twbs/bootstrap/languages",
stargazers_url: "https://api.github.com/repos/twbs/bootstrap/stargazers",
contributors_url: "https://api.github.com/repos/twbs/bootstrap/contributors",
subscribers_url: "https://api.github.com/repos/twbs/bootstrap/subscribers",
subscription_url: "https://api.github.com/repos/twbs/bootstrap/subscription",
commits_url: "https://api.github.com/repos/twbs/bootstrap/commits{/sha}",
git_commits_url: "https://api.github.com/repos/twbs/bootstrap/git/commits{/sha}",
comments_url: "https://api.github.com/repos/twbs/bootstrap/comments{/number}",
issue_comment_url: "https://api.github.com/repos/twbs/bootstrap/issues/comments{/number}",
contents_url: "https://api.github.com/repos/twbs/bootstrap/contents/{+path}",
compare_url: "https://api.github.com/repos/twbs/bootstrap/compare/{base}...{head}",
merges_url: "https://api.github.com/repos/twbs/bootstrap/merges",
archive_url: "https://api.github.com/repos/twbs/bootstrap/{archive_format}{/ref}",
downloads_url: "https://api.github.com/repos/twbs/bootstrap/downloads",
issues_url: "https://api.github.com/repos/twbs/bootstrap/issues{/number}",
pulls_url: "https://api.github.com/repos/twbs/bootstrap/pulls{/number}",
milestones_url: "https://api.github.com/repos/twbs/bootstrap/milestones{/number}",
notifications_url: "https://api.github.com/repos/twbs/bootstrap/notifications{?since,all,participating}",
labels_url: "https://api.github.com/repos/twbs/bootstrap/labels{/name}",
releases_url: "https://api.github.com/repos/twbs/bootstrap/releases{/id}",
deployments_url: "https://api.github.com/repos/twbs/bootstrap/deployments",
created_at: "2011-07-29T21:19:00Z",
updated_at: "2017-10-14T11:28:39Z",
pushed_at: "2017-10-14T10:48:43Z",
git_url: "git://github.com/twbs/bootstrap.git",
ssh_url: "git@github.com:twbs/bootstrap.git",
clone_url: "https://github.com/twbs/bootstrap.git",
svn_url: "https://github.com/twbs/bootstrap",
homepage: "http://getbootstrap.com",
size: 105195,
stargazers_count: 116405,
watchers_count: 116405,
language: "JavaScript",
has_issues: true,
has_projects: true,
has_downloads: true,
has_wiki: false,
has_pages: true,
forks_count: 54702,
mirror_url: null,
open_issues_count: 358,
forks: 54702,
open_issues: 358,
watchers: 116405,
default_branch: "v4-dev",
score: 136.43108
*/
