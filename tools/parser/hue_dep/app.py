import subprocess
#processing_done = subprocess.run(["npm", "run", "app", "select * from tabl where c1=1234 and c2='sachin'"])
p = subprocess.Popen(["npm", "run", "app", "select * from tabl where c1=1234 and c2='sachin'", "--silent"], stdout=subprocess.PIPE)
out, err = p.communicate()
print(out)
