# Contributing Guidelines

This documentation contains a set of guidelines to help you during the contribution process.
We are happy to welcome all the contributions from anyone willing to improve/add new scripts to this project.
Thank you for helping out and remember, **no contribution is too small.**

# Color Codes 🎨
#### Native Color:
1. ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) `#FFFFFF` `Native White`
2. ![#00253A](https://via.placeholder.com/15/00253A/000000?text=+) `#00253A` `Native White`

#### Light Mode:
1. ![#0093ED](https://via.placeholder.com/15/0093ED/000000?text=+) `#0093ED` `Light/Primary`
2. ![#0072B1](https://via.placeholder.com/15/0072B1/000000?text=+) `#0072B1` `Light/10`
3. ![#7DD8FF](https://via.placeholder.com/15/7DD8FF/000000?text=+) `#7DD8FF` `Light/20`
4. ![#D6F5FF](https://via.placeholder.com/15/D6F5FF/000000?text=+) `#D6F5FF` `Light/30`

#### Dark Mode:
1. ![#03A4FF](https://via.placeholder.com/15/03A4FF/000000?text=+) `#03A4FF` `Dark/Primary`
2. ![#52C1FF](https://via.placeholder.com/15/52C1FF/000000?text=+) `#52C1FF` `Dark/10`
3. ![#044468](https://via.placeholder.com/15/044468/000000?text=+) `#044468` `Dark/20`
4. ![#00314D](https://via.placeholder.com/15/00314D/000000?text=+) `#00314D` `Dark/30`

## Need some help regarding the basics?🤔

#### Getting started with <a href="#"><img alt="CSS" src="https://img.shields.io/badge/Sass-hotpink.svg?logo=sass&logoColor=white"></a>

- We have used <a href="#"><img alt="CSS" src="https://img.shields.io/badge/Sass-hotpink.svg?logo=sass&logoColor=white"></a> instead of <a href="#"><img alt="CSS" src="https://img.shields.io/badge/CSS%20-%231572B6.svg?logo=css3&logoColor=white"></a>
- Do styling changes in the respective **Sass** file.
- If you are facing any difficulties you can refer to this [documentation](https://sass-lang.com/guide).

You can refer to the following articles on the basics of Git and GitHub and also contact the Project Mentors,
in case you are stuck:

- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://lab.github.com/githubtraining/introduction-to-github)

## Submitting Contributions👩‍💻👨‍💻

Below you will find the process and workflow used to review and merge your changes.

### Step 0 : Find an issue

- Take a look at the Existing Issues or create your **own** Issues!
- Wait for the Issue to be assigned to you after which you can start working on it.
- Note : Every change in this project should/must have an associated issue.

![Issue](https://user-images.githubusercontent.com/73248007/135501033-ac37f22d-cd96-4326-bf0b-7d0ed070b697.png)


### Step 1 : Fork the Project

- Fork this Repository. This will create a Local Copy of this Repository on your Github Profile.
Keep a reference to the original project in `upstream` remote.  

```bash
git clone https://github.com/<your-username>/<repo-name>  
cd <repo-name>  
git remote add upstream https://github.com/<upstream-owner>/<repo-name>  
```  
![Fork](https://user-images.githubusercontent.com/73248007/135501084-3643da44-118d-4f7a-a8c7-05cef93296b7.png)



- If you have already forked the project, update your copy before working.

```bash
git remote update
git checkout <branch-name>
git rebase upstream/<branch-name>
```  

### Step 2 : Branch

Create a new branch. Use its name to identify the issue you addressing.

```bash
# It will create a new branch with name Branch_Name and switch to that branch 
git checkout -b branch_name
```

### Step 3 : Work on the issue assigned

- Work on the issue(s) assigned to you.
- Add all the files/folders needed.
- After you've made changes or made your contribution to the project add changes to the branch you've just created by:

```bash  
# To add all new files to branch Branch_Name  
git add .  

# To add only a few files to Branch_Name
git add <some files>
```

### Step 4 : Commit

- To commit give a descriptive message for the convenience of the reviewer by:

```bash
# This message get associated with all files you have changed  
git commit -m "message"  
```

- **NOTE**: A PR should have only one commit. Multiple commits should be squashed.

### Step 5 : Work Remotely

- Now you are ready to your work to the remote repository.
- When your work is ready and complies with the project conventions, upload your changes to your fork:

```bash  
# To push your work to your remote repository
git push -u origin Branch_Name
```

- Here is how your branch will look.
![Branch](https://user-images.githubusercontent.com/73248007/135501103-b446d342-70b3-451e-895e-52345eb7cb0e.png)


### Step 6 : Pull Request

- Go to your repository in the browser and click on compare and pull requests.
Then add a title and description to your pull request that explains your contribution.  

![PR](https://user-images.githubusercontent.com/73248007/135501122-6d3bde84-5a50-4baf-8be7-80a4e9f9d51a.png)

- Voila! Your Pull Request has been submitted and will be reviewed by the moderators and merged.🥳
    

### Tip from us😇

It always takes time to understand and learn. So, do not worry at all. We know **you have got this**!💪

### Specific tips on React

Welcome aboard! You can learn more in the [Create React App documentation](https://create-react-app.dev/docs/getting-started/).
